import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: null,
      loading: false,
      error: null,
      searchTerm: localStorage.getItem('searchTerm') || '',
    };
  }

  componentDidMount() {
    // Fetch movie data when the component mounts
    this.fetchMovieData();
  }

  fetchMovieData = async () => {
    // Set loading to true before making the API request
    this.setState({ loading: true, error: null });

    try {
      // Make the API request to Consumet for movies
      const response = await axios.get(`https://api.consumet.org/movies/dramacool/${this.state.searchTerm}`);

      // Log the response to the console
      console.log('API response:', response);

      // Update the state with the fetched movie data
      this.setState({ movieData: response.data.results, loading: false });
    } catch (error) {
      // Handle errors and update the state with the error message
      console.error('Error fetching movie data:', error);
      this.setState({
        error: `An error occurred while fetching movie data: ${error.message || 'Unknown error'}`,
        loading: false,
      });
    }
  };

  handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;

    // Update state and local storage
    this.setState({ searchTerm });
    localStorage.setItem('searchTerm', searchTerm);
  };

  handleSearch = () => {
    // Call fetchMovieData when the search button is clicked
    this.fetchMovieData();
  };

  render() {
    const { movieData, loading, error, searchTerm } = this.state;
    return (
      <div className="m-3">
        {/* Search Bar */}
        <div>
          <div className="d-flex flex-row">
            <div className="col">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
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

        {/* Display loading message while movie data is being fetched */}
        {loading && <p>Loading...</p>}

        {/* Display error message if an error occurred */}
        {error && <p>Error: {error}</p>}

        {/* Display the fetched movie data if available */}
        <div>
          {Array.isArray(movieData) && movieData.length > 0 ? (
            <div className="row mt-3">
              {movieData.map((movie) => (
                <div key={movie.id} className="col-md-4 mb-3">
                  <div style={{ width: '15rem' }}>
                    <div className="card border border-dark">
                      <img src={movie.image} alt={movie.title} />
                    </div>
                    <div style={{ textDecoration: 'none' }}>
                      <Link to={`/view/${movie.id}`}>
                        <center>
                          <b>
                            <p>{movie.title}</p>
                          </b>
                        </center>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No movies found.</p>
          )}
        </div>

        {/* You can add a Route for displaying the movie details when a movie is clicked */}
      </div>
    );
  }
}

export default Dashboard;
