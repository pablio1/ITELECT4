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
    const id = match.params.id;

    try {
      const response = await axios.get(`https://api.consumet.org/anime/gogoanime/info/${id}`);
      console.log('Anime Details API response:', response.data);
      this.setState({ animeDetails: response.data });
    } catch (error) {
      console.error('Error fetching anime details:', error.response ? error.response.data : error.message);
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
      <div className='container mt-5'>
        {animeDetails ? (
          <div className='d-flex flex-row'>
            <div>
              <img className='border border-dark' style={{ width: 300 }} src={animeDetails.image} alt={animeDetails.title} />
            </div>
            <div className='px-5'>
              <h2>{animeDetails.title}</h2>
              <div className="anime-details">
                <p className="mb-2">Other Name: {animeDetails.otherName}</p>
                <p className="mb-2">Release Date: {animeDetails.releaseDate}</p>
                <p className="mb-2">Genre: {animeDetails.genres}</p>
                <p className="mb-2">Status: {animeDetails.status}</p>
                <p className="mb-2">Total Episodes: {animeDetails.totalEpisodes}</p>
                </div>
              <div className="anime-description mt-3">
                <p className="mb-2">Description: {animeDetails.description}</p>
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