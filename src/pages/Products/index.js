import React, { Component, Fragment } from 'react';
import axios from 'axios';

export default class Products extends Component {
  state = { searchAnime: '', lists: [], selectedAnime: null };

  handleSearch = (e) => {
    if (e.key === 'Enter') {
      // API, data, header
      var header = {
        'Access-Control-Allow-Origin': '*',
      };
      axios
        .get(
          'https://api.consumet.org/movies/viewasian/info?id=drama/' +
            this.state.searchAnime,
          header
        )
        .then((response) => {
          this.setState({
            lists: response.data,
            selectedAnime: response.data, // Assuming you want to display the details of the first result
          });
          console.log(response.data);
        });
    }
  };

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <input
                name="searchAnime"
                value={this.state.searchAnime}
                onKeyDown={this.handleSearch}
                onChange={this.handleChangeInput}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Search"
              />
            </div>
          </div>
        </div>

        {this.state.selectedAnime && (
          <Fragment>
            <div className="row">
              <div className="col-12">
                <h2>Title: {this.state.selectedAnime.title}</h2>
                <p>Description: {this.state.selectedAnime.description}</p>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}