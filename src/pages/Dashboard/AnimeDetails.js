// AnimeDetails.js
import React, { Component } from 'react';
import axios from 'axios';

class AnimeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeDetails: null,
      error: null,
    };
  }

  fetchAnimeDetails = async () => {
    const { match } = this.props;
    const animeId = match.params.animeId;

    try {
      const response = await axios.get(`https://kitsu.io/api/edge/anime/${animeId}`);
      console.log('Anime Details API response:', response);

      this.setState({
        animeDetails: response.data.data,
        error: null,
      });
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
      <div className="container mt-5 pb-5">
        {animeDetails ? (
          <div>
            <h2>{animeDetails.attributes.titles.en}</h2>
            {/* Display other anime details as needed */}
          </div>
        ) : (
          <p>Loading anime details...</p>
        )}
      </div>
    );
  }
}

export default AnimeDetails;
