import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

export default class Orders extends Component {
    state = { searchAnime: '', lists: [], selectedImageUrl: null };
  
    handleChangeInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  
    handleSearch = (e) => {
      if (e.key === 'Enter') {
        // API, data, header
        var header = {
          'Access-Control-Allow-Origin': '*',
        };
        axios
          .get(
            'https://api.consumet.org/movies/viewasian/' +
              this.state.searchAnime,
            header
          )
          .then((response) => {
            this.setState({
              lists: response.data.results,
            });
          });
      }
    };
  
    handleWatchClick = (imageUrl) => {
        // Set the selected image URL in the component state
        this.setState({
          selectedImageUrl: imageUrl,
        });
    
        // Store the selected image URL in localStorage
        localStorage.setItem('selectedImageUrl', imageUrl);
      };
  
    render() {
      const { lists, selectedImageUrl } = this.state;
  
      const movieLists =
        lists.length !== 0 ? (
          lists.map((data, index) => (
            <Fragment key={index}>
              <div className="row">
                <div className="col-4">
                  <div className="card">
                    <img
                      href="#"
                      className="card-img-top"
                      src={data.image}
                      alt="Card image cap"
                    />
                    <p>asdfasdf</p>
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <Link
                        to="/products"
                        className="btn btn-primary"
                        onClick={() => this.handleWatchClick(data.image)}
                      >
                        Watch
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))
        ) : (
          <p>Movie Not Found!</p>
        );
  
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
          {movieLists}
        </Fragment>
      );
    }
  }