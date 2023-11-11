import React, { Component } from 'react';
import axios from 'axios';

class MovieDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: null,
      error: null,
    };
  }

  fetchMovieDetails = async () => {
    const { match } = this.props;
    const id = match.params.id;
  
    try {
      const response = await axios.get(`https://api.consumet.org/movies/dramacool/info?id=${id}`);
      console.log('Movie Details API response:', response.data);
      this.setState({ movieDetails: response.data });
    } catch (error) {
      console.error('Error fetching movie details:', error.response ? error.response.data : error.message);
      this.setState({ error: 'An error occurred while fetching movie details' });
    }
  };

  componentDidMount() {
    this.fetchMovieDetails();
  }

  render() {
    const { movieDetails, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className='container mt-5'>
        {movieDetails ? (
          <div className='d-flex flex-row'>
            <div>
              <img className='border border-dark' style={{ width: 300 }} src={movieDetails.image} alt={movieDetails.title} />
            </div>
            <div className='px-5'>
              <h2>{movieDetails.title}</h2>
              {/* Other details */}
              {/* ... */}
            </div>
          </div>
        ) : (
          <p>Loading movie details...</p>
        )}
      </div>
    );
  }
}

export default MovieDescription;
