import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeData: null,
      loading: false,
      error: null,
      searchTerm: localStorage.getItem('searchTerm') || '',
    };
  }


  fetchAnimeData = async () => {
    
    this.setState({ loading: true, error: null });

    try {
      
      const response = await axios.get(`https://kitsu.io/api/edge/manga?filter[text]=${this.state.searchTerm}`);

      
      console.log('API response:', response);

      
      this.setState({ animeData: response.data.data, loading: false });
    } catch (error) {
      
      console.error('Error fetching anime data:', error);
      this.setState({ error: 'An error occurred while fetching anime data', loading: false });
    }
  };

  componentDidMount() {
    
    this.fetchAnimeData();
  }

  handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;

    
    this.setState({ searchTerm });
    localStorage.setItem('searchTerm', searchTerm);
  };

  handleSearch = () => {
    
    localStorage.setItem('searchTerm', this.state.searchTerm);
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
              {animeData.map((anime) => (
                <div key={anime.id} className="col-md-4 mb-3">
                  <div style={{ width: '15rem' }}>
                    <div className="card border border-dark">
                      <img src={anime.attributes.posterImage.small} alt={anime.attributes.titles.en} />
                    </div>
                    <div style={{ textDecoration: 'none' }}>
                    <Link to={`/view/${anime.id}`}>
                      <center>
                        <b>
                          <p>{anime.attributes.titles.en}</p>
                        </b>
                      </center>
                    </Link>
                    </div>
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