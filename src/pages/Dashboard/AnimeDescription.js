import React, { Component } from 'react';
import axios from 'axios';

class AnimeDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeDetails: null,
      error: null,
    };
  }

  

  fetchAnimeDetails = async () => {
    const { match } = this.props;
    const mal_id = match.params.mal_id;

    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${mal_id}`);
      console.log('Anime Details API response:', response.data);

      this.setState({ animeDetails: response.data });
    } catch (error) {
      console.error('Error fetching anime details:', error);
      this.setState({ error: 'An error occurred while fetching anime details' });
    }
  };

  componentDidMount() {
    this.fetchAnimeDetails();
  }

  render() {
    const { animeDetails, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className="container mt-5">
        {animeDetails ? (
          <div className="d-flex flex-row">
            <div>
              <img
                className="border border-dark"
                style={{ width: 300 }}
                src={animeDetails.data.images.jpg.image_url}
                alt={animeDetails.title}
              />
            </div>
            <div className="px-5">
              <h2>{animeDetails.data.title}</h2>
              <p className="mb-0">Rank: {animeDetails.data.rank}</p>
              <p className="mb-0">Genres: {animeDetails.data.genres.map((genre) => genre.name).join(', ')}</p>
              <p className="mb-0">Type: {animeDetails.data.type}</p>
              <p className="mb-0">Episodes: {animeDetails.data.episodes}</p>
              <p className="mb-0">Status: {animeDetails.data.status}</p>
              <p className="mb-0">Aired: {animeDetails.data.aired.string}</p>
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
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  />
                </svg>
                {animeDetails.data.score}
              </p>
              <hr />
              <p>{animeDetails.data.synopsis}</p>

              {/* Genres */}
                <div>
                <h5>Genres:</h5>
                <ul className="list-group d-flex flex-row">
                    {animeDetails.data.genres.map((genre) => (
                    <li key={genre.mal_id} className="list-group-item mr-2">
                        {genre.name}
                    </li>
                    ))}
                </ul>
                </div>

            </div>
          </div>
        ) : (
          <p>Loading anime details...</p>
        )}
      </div>
    );
  }
}

export default AnimeDescription;