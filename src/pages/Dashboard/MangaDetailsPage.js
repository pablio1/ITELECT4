// MangaDetailsPage.js

import React, { Component } from 'react';
import axios from 'axios';

class MangaDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangaDetails: null,
      error: null,
    };
  }

  fetchMangaDetails = async () => {
    const { match } = this.props;
    const mangaId = match.params.mangaId;

    try {
      const response = await axios.get(`https://kitsu.io/api/edge/manga/${mangaId}`);
      console.log('Manga Details API response:', response);

      this.setState({
        mangaDetails: response.data.data,
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
    const { mangaDetails, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className="container mt-5 pb-5">
        {mangaDetails ? (
          <div>
            <h2>{mangaDetails.attributes.titles.en}</h2>
            {/* Display other manga details as needed */}
            <img
              className="border border-dark"
              style={{ width: 300 }}
              src={mangaDetails.attributes.posterImage.small}
              alt={mangaDetails.attributes.titles.en}
            />
            <p className="mb-0">Rank: {mangaDetails.attributes.popularityRank}</p>
            <p className="mb-0">Status: {mangaDetails.attributes.status}</p>
            {/* Add other details as needed */}
          </div>
        ) : (
          <p>Loading manga details...</p>
        )}
      </div>
    );
  }
}

export default MangaDetailsPage;
