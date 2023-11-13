import React, { Component, Fragment } from 'react';
import axios from 'axios';
class Home extends Component {
    state = {searchAnime: "", lists: []};
    handleSearch = e => {
        if(e.key === "Enter"){
            var header = {
                "Access-Control-Allow-Origin": "*"
            }
            axios.get("https://api.consumet.org/movies/viewasian/"+this.state.searchAnime,header)
            .then(response =>{
                this.setState({
                    lists: response.data.results
                })
            
            })
        }
    }
    handleChangeInput = e =>{
        this.setState({
            [e.target.name]: e.target.value 
        })
       
    }
    render() {
        const { lists } = this.state;
        var movieLists = lists.length !== 0 ? lists.map((data, index) => {
            return (
                <Fragment>
                     <div className="row">
                    <div className="col-8">
                        <div class="card">
                        <img class="card-img-top" src={data.image} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{data.title}</h5>
                            <div href="#" class="btn btn-primary">Watch Now</div>
                        </div>
                        </div>
                    </div>
                </div>
                </Fragment>
            )
        }) : "Movie not found!"; 

        return (
            <Fragment>
                
                <div className="row">
                    <div className='col-12'>
                        <div class="form-group">
                            <input name= "searchAnime" value={this.state.searchAnime} onKeyDown={this.handleSearch} onChange={this.handleChangeInput} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search" />
                        </div>
                    </div>    
                </div>
                
               {movieLists}
            </Fragment>
        );
       
    }
}

export default Home;