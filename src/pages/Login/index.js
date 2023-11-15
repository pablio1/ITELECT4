import React, { Component } from 'react';
import axios from 'axios';
import './logincss.css'

class Login extends Component {
  state = {title: '', results: []}
    handleChangeInput = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }
    handleSearchButton = () => {
      const { title } = this.state;
      const headers = {
          'Access-Control-Allow-Origin': '*'
      };
  
      axios.get('https://api.consumet.org/manga/mangadex/' + title, { headers })
          .then((response) => {
              // Check if response.data is defined and has a 'results' property
              if (response.data && response.data.results) {
                  this.setState({
                      results: response.data.results
                  });
              } else {
                  console.error('Invalid response format:', response.data);
              }
          })
          .catch((error) => {
              console.error('Error fetching data:', error);
              // Handle error appropriately, e.g., set an error state
          });
  };
    render() {

        var books = this.state.results.length !== 0 ? (
            this.state.results.map((data, index) => {
                console.log(data);
                const truncatedDescription = data.description ? data.description.slice(0, 100) + (data.description.length > 100 ? '...' : '') : '';

                return (
                    <div key={index} class="card" className='Card' style={{width: '18rem'}}>
                        <img class="card-img-top" src={data.image} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">{data.title}</h5>
                            <p class="card-text">Description: {truncatedDescription}</p>
                            <p class="card-text">Release Date: {data.releaseDate}</p>
                            <p class="card-text">Status: {data.status}</p>
                            <button class="btn btn-primary">Read</button>
                        </div>
                    </div>
                )
            })
        ) : "";

        return (
            <div class="m-3 mt-5">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-md-12 col-sm-12 p-0 text-center" style={{ maxWidth: '350px', margin: '5 auto', marginLeft: 'auto'}}>
                        <input type="text" class="form-control search-slt" value={this.state.title} name="title" onChange={this.handleChangeInput} placeholder="Search Manga"/>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                        <button type="button" class="btn btn-info" onClick={() => this.handleSearchButton()}>Search</button>
                    </div>
                </div>
                <div class="row mt-5">
                    {books}
                </div>
            </div>
        );
    }
}

export default Login;
