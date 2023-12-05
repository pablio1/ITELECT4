import React, { Component } from 'react';

class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingMovies: [],
    };
  }

  componentDidMount() {
    const apiKey = 'e0974c020cbeb2405fbcd50373c47001'; // Replace with your actual API key

    // Fetch upcoming movies
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          this.setState({ upcomingMovies: data.results });
        } else {
          throw new Error('Results not present in the API response');
        }
      })
      .catch(error => console.error('Error fetching upcoming movies data:', error));
  }

  render() {
    const { upcomingMovies } = this.state;

    const upcomingMovieCards = upcomingMovies.map((movie, index) => (
      <div className="col-md-6 mb-5" key={index}>
        <div className="card shadow-sm">
          {/* You may want to replace the placeholder image with the actual movie poster */}
          <img
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ objectFit: 'scale-down', backgroundColor: 'black' }}
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.overview}</p>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-body-secondary">{/* Add the movie duration or other information */}</small>
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">Favorite</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <div className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none" style={{ paddingTop: '20px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
          </svg>
          <span className="fs-3 fw-semibold" style={{ marginLeft: '20px' }}>Upcoming Movies</span>
        </div>
        <div style={{ padding: '20px 5px' }}> 
          <div className="row">
            {upcomingMovieCards}
          </div>
        </div>
      </div>
    );
  }
}

export default Upcoming;
