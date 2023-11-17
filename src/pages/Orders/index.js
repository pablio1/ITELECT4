import React, { Component, Fragment } from 'react';
import axios from 'axios';


export default class Orders extends Component {
  state = {searchAnime: '', lists: []};
  handleSearch = e => {
    if (e.key === "Enter") {
      // API, data, header
      var header = {
        "Access-Control-Allow-Origin": "*"
      };
  
      axios
        .get(
          "https://api.consumet.org/movies/viewasian/info?id=drama/" +
            this.state.searchAnime,
          header
        )
        .then(response => {
          console.log("API Response:", response.data); // Log the response data
          this.setState({
            lists: response.data.results
          });
        })
        .catch(error => {
          console.error("API Error:", error); // Log any errors
        });
    }
  };
    
    handleChangeInput = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { lists } = this.state;
      
        if (!lists) {
          return "Loading..."; // or another loading indicator
        }
      
        var movieLists = lists.length !== 0 ? (
          lists.map((data, index) => (
            <Fragment key={index}>
              <div className="row">
                <div className="col-4">
                  <div className="card">
                    <img className="card-img-top" src={data.image} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
      
                      <div className="btn btn-primary">Watch</div>
      
                      <h6>Chapters:</h6>
                      <ul>
                        {data.episodes.map((episode, i) => (
                          <li key={i}>
                            <a href={episode.url} target="_blank" rel="noopener noreferrer">
                              {episode.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))
        ) : "Movie Not Found!";
      
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
                    type="text"
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

