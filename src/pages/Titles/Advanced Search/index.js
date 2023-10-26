import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    state = {title: '', results: []}
    handleChangeInput = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSearchButton = () =>{
        const {title} = this.state;
        const headers = {
            'Access-Control-Allow-Origin': '*'
        }
        axios.get('https://api.consumet.org/light-novels/readlightnovels/'+title, headers)
        .catch((e) => {
            console.log(e);
            return {status: 401, message: 'Unauthorized'}
        })
        .then((response) => {
            this.setState({
                result: response.data.results
            })
        })
    }
    render() {

        var books = this.state.results.length !== 0 ? (
            this.state.results.map((data, index) => {
                    console.log(data);
                    return (
                        <div style={{padding: '10px 5px'}}>
                            <div class="row">
                                <div class="col-md-6">
                                    <div key ={index} class="card shadow-sm">
                                        <img class="bd-placeholder-img card-img-top" src={data.image} alt="Card image cap" width="100%" height="225"/>
                                        <div class="card-body">
                                            <p class="card-text">Call description here</p>
                                            <h5 class="card-title">{data.title}</h5>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                       
                    )
                })              
            ) : "";

        return (
            <div>
                
            </div>
        );
    }
}

export default Search;
