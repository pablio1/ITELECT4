import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import AnimeDetails from './AnimeDetails'; // Import AnimeDetails component


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeData: null,
      loading: false,
      error: null,
      searchTerm: localStorage.getItem('searchTerm') || '',
    };
  }

  fetchAnimeData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await axios.get(`https://kitsu.io/api/edge/manga?filter[text]=${this.state.searchTerm}`);
      console.log('API response:', response);

      this.setState({ animeData: response.data.data, loading: false });
    } catch (error) {
      console.error('Error fetching anime data:', error);
      this.setState({ error: 'An error occurred while fetching anime data', loading: false });
    }
  };

  componentDidMount() {
    this.fetchAnimeData();
  }

  handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
    localStorage.setItem('searchTerm', searchTerm);
  };

  handleSearch = () => {
    localStorage.setItem('searchTerm', this.state.searchTerm);
    this.fetchAnimeData();
  };

  render() {
    const { animeData, loading, error, searchTerm } = this.state;
    return (
      <div className="m-3">
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <div className="d-flex flex-row">
              <div className="col">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search by title"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  value={searchTerm}
                  onChange={this.handleSearchInputChange}
                />
              </div>
              <div className="col">
                <button type="button" className="btn btn-primary" onClick={this.handleSearch}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ... (existing code) */}

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {/* ... (existing code) */}

        <div>
        {animeData && (
            <div className="row mt-3 justify-content-center">
              {animeData.map((anime) => (
                <div key={anime.id} className="col-md-4 mb-3">
                  <div style={{ width: '15rem' }}>
                    <div className="card border border-dark">
                      <img src={anime.attributes.posterImage.small} alt={anime.attributes.titles.en} />
                    </div>
                    <div style={{ textDecoration: 'none' }}>
                      {/* Update the Link to navigate to AnimeDetails with the correct URL */}
                      <Link to={`/manga/${anime.id}`}>
                        <center>
                          <b>
                            <p>{anime.attributes.titles.en}</p>
                          </b>
                        </center>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Add Route for AnimeDetails in your main component */}
        <Route path="/view/:animeId" component={AnimeDetails} />
      </div>
    );
  }
}

class ChapterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapterDetails: null,
      error: null,
    };
  }

  fetchChapterDetails = async () => {
    const { match } = this.props;
    const chapterId = match.params.chapterId;

    try {
      const response = await axios.get(`https://kitsu.io/api/edge/chapters/${chapterId}`);
      console.log('Chapter Details API response:', response);

      this.setState({
        chapterDetails: response.data.data,
        error: null,
      });
    } catch (error) {
      console.error('Error fetching chapter details:', error);
      this.setState({ error: 'An error occurred while fetching chapter details' });
    }
  };

  componentDidMount() {
    this.fetchChapterDetails();
  }

  render() {
    const { chapterDetails, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className="container mt-5 pb-5">
        {chapterDetails ? (
          <div>
            <h2>{chapterDetails.attributes.titles.en}</h2>
            {/* Display other chapter details as needed */}
          </div>
        ) : (
          <p>Loading chapter details...</p>
        )}
      </div>
    );
  }
}

class MangaDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangaDetails: null,
      genres: [],
      chapters: [],
      error: null,
    };
  }

  fetchMangaDetails = async () => {
    const { match } = this.props;
    const mangaId = match.params.mangaId;

    try {
      const response = await axios.get(`https://kitsu.io/api/edge/manga/${mangaId}`);
      const genresResponse = await axios.get(`https://kitsu.io/api/edge/manga/${mangaId}/genres`);
      const chaptersResponse = await axios.get(`https://kitsu.io/api/edge/manga/${mangaId}/relationships/chapters`);

      console.log('Manga Details API response:', response);
      console.log('Genres API response:', genresResponse);
      console.log('Chapters API response:', chaptersResponse);

      this.setState({
        mangaDetails: response.data.data,
        genres: genresResponse.data.data,
        chapters: chaptersResponse.data.data,
        error: null,
      });
    } catch (error) {
      console.error('Error fetching manga details:', error);
      this.setState({ error: 'An error occurred while fetching manga details' });
    }
  };

  componentDidMount() {
    this.fetchMangaDetails();
  }

  render() {
    const { mangaDetails, genres, chapters, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className="container mt-5 pb-5">
        <div className="mb-3">
          <Link to="/dashboard">Back</Link>
        </div>
        {mangaDetails ? (
          <div className="d-flex flex-row">
            <div>
              <img
                className="border border-dark"
                style={{ width: 300 }}
                src={mangaDetails.attributes.posterImage.small}
                alt={mangaDetails.attributes.titles.en}
              />
            </div>
            <div className="px-5">
              <h2>{mangaDetails.attributes.titles.en}</h2>
              <p className="mb-0">Rank: {mangaDetails.attributes.popularityRank}</p>
              <p className="mb-0">Status: {mangaDetails.attributes.status}</p>
              <p className="mb-0">Type: {mangaDetails.attributes.mangaType}</p>
              <p className="mb-0">Published: {mangaDetails.attributes.startDate}</p>
              <p className="mb-0">Popularity: {mangaDetails.attributes.popularityRank}</p>
              <p className="mb-0 d-flex align-items-center">
                Score:{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: '5px', marginRight: '5px' }}
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.950l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                {mangaDetails.attributes.averageRating}
              </p>
              <hr />
              <p>{mangaDetails.attributes.synopsis}</p>

              <div>
                <h5>Genres:</h5>
                <ul className="list-group d-flex flex-row">
                  {genres.map((genre) => (
                    <li key={genre.id} className="list-group-item mr-2">
                      {genre.attributes.name}
                    </li>
                  ))}
                </ul>
              </div>

              <br />

              <div>
                <h5>Chapters:</h5>
                <div className="row">
                  {chapters.map((chapter) => {
                    const chapterNumber = chapter.id;

                    return (
                      <div key={chapter.id} className="col-md-3 mb-3 border border-dark p-2 d-flex justify-content-center">
                        <Link to={`/chapter/${chapter.id}`} className="list-group-item">
                          {`Chapter ${String(chapterNumber)}`}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading manga details...</p>
        )}
      </div>
    );
  }
}

export { Dashboard, ChapterDetails, MangaDescription };