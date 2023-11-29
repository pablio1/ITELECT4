import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  state = { title: '', results: [] };

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSearchButton = () => {
    this.fetchSearchResults();
  };

  handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.fetchSearchResults();
    }
  };

  fetchSearchResults = () => {
    const { title } = this.state;
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDk3NGMwMjBjYmViMjQwNWZiY2Q1MDM3M2M0NzAwMSIsInN1YiI6IjY1MGU3YjY5M2E0YTEyMDBlMjkzYzgyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H2XveuanlVm4S3PWtrs3bR8g6neiFAsUuE9hp_5YiJM'; // Replace with your actual API key
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    };

    axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: { query: title },
      headers: headers
    })
      .then((response) => {
        this.setState({
          results: response.data.results
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { results } = this.state;

    const slides = results.map((data, index) => (
      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
        <img
          className="d-block w-100"
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt="Card"
        />
      </div>
    ));

    return (
      <div>
        <div className="container" style={{ backgroundColor: 'black', marginTop: '50px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="title"
              value={this.state.title}
              onChange={this.handleChangeInput}
              onKeyPress={this.handleEnterKeyPress}
              style={{ marginRight: '10px' }}
            />
            <button className="btn btn-outline-success" type="button" onClick={this.handleSearchButton}>
              Search
            </button>
          </div>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ margin: '-16px' }}
          >
            <div className="carousel-inner" style={{ display: 'flex', flexWrap: 'nowrap' }}>
              {slides}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Search;
