import React, { Component } from 'react';
import axios from 'axios';
import '../Movie/movie.css'; // Assuming you have a CSS file for styling

class Movie extends Component {
  state = {
    movieDetails: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    // Retrieve movie ID from the route params
    const movieId = this.props.match.params.id;

    // Replace this URL with your movie API endpoint
    axios.get(`https://api.consumet.org/movies/viewasian//${movieId}`)
      .then((response) => {
        this.setState({
          movieDetails: response.data.data,
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

    const bannerStyle = {
      backgroundImage: `https://api.consumet.org/movies/viewasian//(${movieDetails.images.poster})`, // Adjust the property based on your movie API response
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="banner" style={bannerStyle} />
            <div className="card">
              <img
                src={movieDetails.images.poster}
                alt={movieDetails.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movieDetails.title}</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card card-synopsis">
              <div className="card-body">
                <h5 className="card-title">Synopsis</h5>
                <p className="card-text">{movieDetails.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;