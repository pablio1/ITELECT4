import React, { Component } from 'react';
import axios from 'axios';
import './read.css'; // You can create a CSS file for styling

class MovieDetails extends Component {
  state = {
    movieDetails: null,
    loading: true,
    error: null,
  };

  
  componentDidMount() {
    // Replace this URL with your movie API endpoint
    axios.get(`https://api.consumet.org/movies/viewasian/info?id={}`) // Use a dynamic movie ID based on your application logic
      .then((response) => {
        this.setState({
          movieDetails: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          loading: false,
        });
      });
  }

  render() {
    const { movieDetails, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className="movie-details-container">
        <div className="movie-details">
          <img
            src={movieDetails.poster} // Adjust the property based on your movie API response
            alt={movieDetails.title}
            className="movie-poster"
          />
          <div className="movie-info">
            <h2 className="movie-title">{movieDetails.title}</h2>
            <p className="movie-release-date">Release Date: {movieDetails.releaseDate}</p>
            <p className="movie-genre">Genre: {movieDetails.genre}</p>
            <p className="movie-synopsis">{movieDetails.synopsis}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;