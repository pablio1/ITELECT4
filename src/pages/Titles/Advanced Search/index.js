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
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDk3NGMwMjBjYmViMjQwNWZiY2Q1MDM3M2M0NzAwMSIsInN1YiI6IjY1MGU3YjY5M2E0YTEyMDBlMjkzYzgyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H2XveuanlVm4S3PWtrs3bR8g6neiFAsUuE9hp_5YiJM';
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

    const movies = results.map((data, index) => (
      <div className="col-md-4 mb-5" key={index}>
        <div className="card shadow-sm">
          <img
            className="bd-placeholder-img card-img-top"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt="Card"
            style={{ objectFit: 'contain', height: '225px', backgroundColor: 'black' }}
          />
          <div className="card-body">
            <p className="card-text">{data.overview}</p>
            <h5 className="card-title">{data.title}</h5>
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Favorite
              </button>
              <button type="button" className="btn btn-sm btn-outline-secondary">
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    ));

    const rows = [];
    for (let i = 0; i < movies.length; i += 3) {
      const row = (
        <div className="row" key={i}>
          {movies.slice(i, i + 3)}
        </div>
      );
      rows.push(row);
    }

    return (
      <div>
        <div className="container" style={{ display: 'flex', marginTop: '20px', marginBottom: '10px' }}>
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
        {rows}
      </div>
    );
  }
}

export default Search;
