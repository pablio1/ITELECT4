import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const bodyStyle = {
  backgroundColor: '#aaffaa',
};

class Home extends Component {
  state = {
    searchAnime: '',
    animeList: [],
    filteredAnimeList: [],
    selectedAnime: null,
    episodes: [],
    modalIsOpen: false,
    selectedEpisode: null,
    watchModalIsOpen: false,
    selectedEpisodeUrl: null, // Added new state for selected episode URL
  };

  async componentDidMount() {
    try {
      const response = await axios.get('https://kitsu.io/api/edge/anime');
      this.setState({
        animeList: response.data.data,
        filteredAnimeList: response.data.data,
      });
    } catch (error) {
      console.error('Error fetching anime data:', error);
    }
  }

  handleSearch = () => {
    const { searchAnime, animeList } = this.state;
    const filteredAnimeList = animeList.filter((anime) =>
      anime.attributes.canonicalTitle.toLowerCase().includes(searchAnime.toLowerCase())
    );
    this.setState({
      filteredAnimeList,
      selectedAnime: null,
    });
  };

  handleSelectAnime = async (animeId) => {
    try {
      const [animeResponse, episodeResponse] = await Promise.all([
        axios.get(`https://kitsu.io/api/edge/anime/${animeId}`),
        axios.get(`https://kitsu.io/api/edge/anime/${animeId}/episodes`),
      ]);

      this.setState({
        selectedAnime: {
          ...animeResponse.data.data.attributes,
          episodes: episodeResponse.data.data,
        },
        modalIsOpen: true,
      });
    } catch (error) {
      console.error('Error fetching anime data:', error);
      this.setState({
        selectedAnime: null,
        modalIsOpen: true, // Open the modal even if fetching fails to show an empty state
      });
    }
  };

  handleSelectEpisode = (episodeId) => {
    const { selectedAnime } = this.state;
  
    if (!selectedAnime) {
      console.error('No selected anime.');
      return;
    }
  
    const selectedEpisode = selectedAnime.episodes.find((episode) => episode.id === episodeId);
  
    if (!selectedEpisode) {
      console.error('Selected episode not found.');
      return;
    }
  
    const streamingLinks = selectedEpisode.attributes.streamingLinks || [];
    const selectedEpisodeUrl = streamingLinks.length ? streamingLinks[0].url : null;
  
    this.setState({
      selectedEpisode: episodeId,
      selectedEpisodeUrl,
      watchModalIsOpen: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      modalIsOpen: false,
      selectedEpisode: null,
      watchModalIsOpen: false,
      selectedEpisodeUrl: null,
    });
  };

  handleCloseWatchModal = () => {
    this.setState({
      watchModalIsOpen: false,
    });
  };

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const {
      filteredAnimeList,
      selectedAnime,
      modalIsOpen,
      selectedEpisode,
      watchModalIsOpen,
      selectedEpisodeUrl,
    } = this.state;

    const animeCards = filteredAnimeList.map((anime) => (
      <div style={bodyStyle} key={anime.id} className="col-4">
        <div className="card">
          <img className="card-img-top" src={anime.attributes.posterImage.medium} alt="Anime Poster" />
          <div className="card-body">
            <h5 className="card-title">
              {anime.attributes.canonicalTitle}
              <button
                className="btn btn-primary ml-2"
                onClick={() => this.handleSelectAnime(anime.id)}
              >
                Episodes
              </button>
            </h5>
            {anime.attributes.streamingLinks && anime.attributes.streamingLinks.length > 0 && (
              <a
                href={anime.attributes.streamingLinks[0].url}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch
              </a>
            )}
          </div>
        </div>
      </div>
    ));

    const episodeList = selectedAnime?.episodes.map((episode) => (
      <div
        key={episode.id}
        className={`mb-2 ${selectedEpisode === episode.id ? 'selected-episode' : ''}`}
        onClick={() => this.handleSelectEpisode(episode.id)}
      >
        <div>
          <img
            src={episode.attributes.thumbnail.original}
            alt={`Episode ${episode.attributes.number} Thumbnail`}
            style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px' }}
          />
          <span>
            Episode {episode.attributes.number}: {episode.attributes.canonicalTitle}
          </span>
        </div>
      </div>
    ));

    return (
      <Fragment>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="form-group">
              <input
                name="searchAnime"
                value={this.state.searchAnime}
                onChange={this.handleChangeInput}
                type="text"
                className="form-control"
                placeholder="Search"
                style={{ width: '500px' }}
              />
              <button onClick={this.handleSearch} className="btn btn-primary ml-2">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {animeCards}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={this.handleCloseModal}
            contentLabel="Anime Details and Episodes"
          >
            {selectedAnime && (
              <div>
                <h2>{selectedAnime.canonicalTitle}</h2>
                <img
                  src={selectedAnime.posterImage.medium}
                  alt="Anime Poster"
                  style={{ maxWidth: '300px', maxHeight: '400px' }}
                />
                <p>{selectedAnime.description}</p>
                <p>Type: {selectedAnime.subtype}</p>
              </div>
            )}
            <h2>Episodes:</h2>
            {episodeList}
            <button onClick={this.handleCloseModal}>Close</button>
          </Modal>
          <Modal
            isOpen={watchModalIsOpen}
            onRequestClose={this.handleCloseWatchModal}
            contentLabel="Watch Episode"
          >
            {selectedAnime && selectedEpisodeUrl && (
              <div>
                <h2>Watch {selectedAnime.canonicalTitle}</h2>
                <iframe
                  title={`Episode ${selectedEpisode.attributes.number}`}
                  width="560"
                  height="315"
                  src={selectedEpisodeUrl}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <button onClick={this.handleCloseWatchModal}>Close</button>
          </Modal>
        </div>
      </Fragment>
    );
  }
}

export default Home;
