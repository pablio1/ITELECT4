import React, { Component } from 'react';
import axios from 'axios';

class AnimeDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeDetails: null,
      error: null,
      episodes: [], // Initialize episodes as an empty array
    };
  }

  fetchAnimeDetails = async () => {
    const { match } = this.props;
    const animeId = match.params.animeId;

    try {
      // Fetch anime details
      const animeResponse = await axios.get(`https://kitsu.io/api/edge/anime/${animeId}`);
      console.log('Anime Details API response:', animeResponse.data);

      const animeDetails = animeResponse.data.data || {};

      // Fetch episodes separately
      const episodesResponse = await axios.get(`https://kitsu.io/api/edge/anime/${animeId}/episodes`);
      console.log('Episodes API response:', episodesResponse.data);

      const episodes = episodesResponse.data.data || [];

      this.setState({
        animeDetails: animeDetails,
        isLoading: false,
        episodes: episodes,
      });

      console.log('Episodes:', episodes); // Log episodes after setting the state
    } catch (error) {
      console.error('Error fetching anime details:', error);
      this.setState({ error: 'An error occurred while fetching anime details' });
    }
  };

  componentDidMount() {
    this.fetchAnimeDetails();
  }

  // New method to handle episode clicks
  handleEpisodeClick = (episodeNumber) => {
    // Add your logic here for handling episode clicks
    console.log(`User clicked on Episode ${episodeNumber}`);
    // You can add the logic to navigate to the selected episode here
  };

  render() {
    const { animeDetails, error, episodes } = this.state;

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
              src={animeDetails.attributes.posterImage.original}
              alt={animeDetails.attributes.canonicalTitle}
            />
          </div>
          <div className="px-5">
            <h2>{animeDetails.attributes.canonicalTitle}</h2>
            <p className="mb-0">Rank: {animeDetails.attributes.rank}</p>
            <p className="mb-0">Type: {animeDetails.attributes.subtype}</p>
            <p className="mb-0">Episodes: {animeDetails.attributes.episodeCount}</p>
            <p className="mb-0">Status: {animeDetails.attributes.status}</p>
            <p className="mb-0">Aired: {animeDetails.attributes.startDate}</p>
            <p className="mb-0 d-flex align-items-center">
              Score: {animeDetails.attributes.averageRating}
            </p>
            <hr />
            <p>{animeDetails.attributes.synopsis}</p>

            {/* Genres */}
            {animeDetails.attributes.genres && (
              <div>
                <h5>Genres:</h5>
                <ul className="list-group d-flex flex-row">
                  {animeDetails.attributes.genres.map((genre) => (
                    <li key={genre.id} className="list-group-item mr-2">
                      {genre.attributes.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Episodes */}
            <div>
              <h5>Episodes:</h5>
              <ul className="list-group d-flex flex-row">
                {episodes.map((episode) => (
                  <li key={episode.id} className="list-group-item mr-2">
                    Episode {episode.attributes.number}: {episode.attributes.titles.en || episode.attributes.titles.en_jp}
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
