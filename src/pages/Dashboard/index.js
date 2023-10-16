import React, { Component } from 'react';
import axios from 'axios';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeData: null,
      loading: false,
      error: null,
      searchTerm: '', // New state for the search term
    };
  }

  componentDidMount() {
    // Fetch anime data when the component mounts
    this.fetchAnimeData();
  }

  fetchAnimeData = async () => {
    // Set loading to true before making the API request
    this.setState({ loading: true, error: null });

    try {
      // Make the API request to Jikan for top anime
      const response = await axios.get(`https://api.jikan.moe/v4/manga?q=${this.state.searchTerm}`);

      // Log the response to the console
      console.log('API response:', response)

      // Update the state with the fetched anime data
      this.setState({ animeData: response.data, loading: false });
    } catch (error) {
      // Handle errors and update the state with the error message
      console.error('Error fetching anime data:', error);
      this.setState({ error: 'An error occurred while fetching anime data', loading: false });
    }
  };
  
  handleSearchInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    // Call fetchAnimeData when the search button is clicked
    this.fetchAnimeData();
  };
  

  render() {
    const { animeData, loading, error, searchTerm } = this.state;
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

        {/* Display loading message while anime data is being fetched */}
        {loading && <p>Loading...</p>}

        {/* Display error message if an error occurred */}
        {error && <p>Error: {error}</p>}

        {/* Display the fetched anime data if available */}
        <div>
          {animeData && (
            <div className="row mt-3">
            {animeData.data.map((anime) => (
              <div key={anime.mal_id} className="col-md-4 mb-3">
                <div style={{ width: '15rem'}}>
                  <div className="card border border-dark">
                  <img src={anime.images.jpg.image_url} alt={anime.title} />
                  </div>
                  <center><b><p>{anime.title}</p></b></center>
                </div>
                
              </div>
            ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;