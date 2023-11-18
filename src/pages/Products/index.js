import React, { Component, Fragment } from 'react';
import axios from 'axios';

export default class Products extends Component {
  state = {searchAnime: '', lists: []};
    handleSearch = e => {
        if(e.key === "Enter"){
            //API, data, header
            var header  = {
                "Access-Control-Allow-Origin": "*"
            }
            //https://docs.consumet.org/rest-api/Movies/viewasian/get-movie-info
            axios.get("https://api.consumet.org/movies/viewasian/"+this.state.searchAnime,header)
            //axios.get("https://api.consumet.org/movies/viewasian/info?id=drama/" + this.state.searchAnime, header)
            //axios.get("https://api.consumet.org/movies/viewasian/info?id=drama/"+this.state.searchAnime,header)
            .then(response =>{
                this.setState({
                    lists: response.data.results
                    
                })
               // console.log(response.data.results);
            })
        }
        
    }
    
    handleChangeInput = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
      //?:
      const { lists } = this.state;
      var movieLists = lists.length !== 0 ? lists.map((data, index) => {
          return (
              <Fragment>
                   <div className="row">
                      <div className="col-4">
                          <div class="card">
                              <img href="#" class="card-img-top" src={data.image} alt="Card image cap"/>
                              <p>asdfasdf</p>
                              <div class="card-body">
                                    
                                  <h5 class="card-title">{data.title}</h5>
                                  <div href="#" class="btn btn-primary">Watch</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </Fragment>
          )
      }) : "Movie Not Found!";

      return (
          <Fragment>
              <div className="row">
                  <div className='col-12'>
                      <div class="form-group">
                          <input name="searchAnime" value={this.state.searchAnime} onKeyDown={this.handleSearch} 
                          onChange={this.handleChangeInput} type="email" class="form-control" 
                          id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seach"/>
                      </div>
                  </div>
              </div>
             {movieLists}
          </Fragment>
      );
  }
}