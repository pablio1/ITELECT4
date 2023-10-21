import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    state = {title: '', results: []}
    handleChangeInput = e => {
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }
    handleSearchButton = () => {
        const {title} = this.state;
        const headers = {
            'Access-Control-Allow-Origin' : '*'
        }
        axios.get('https://api.consumet.org/movies/dramacool/'+title, headers)
        .catch((e) => {
            console.log(e);
            return {status: 401, message: 'Unauthorized'}
        })
        .then((response) => {
            this.setState({
                results: response.data.results
            })
        })
    }
    render() {

        var books = this.state.results.length !== 0 ? (
            this.state.results.map((data, index) => {
                console.log(data);
                return (
                    <div key={index} class="card" className='Card' style={{width: '18rem'}}>
                        <img class="card-img-top" src={data.image} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">{data.title}</h5>
                            <button class="btn btn-primary">Watch</button>
                        </div>
                    </div>
                )
            })
        ) : "";

        return (
            <div class="m-3 mt-5">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-md-12 col-sm-12 p-0 text-center" style={{ maxWidth: '350px', margin: '5 auto', marginLeft: 'auto'}}>
                        <input type="text" class="form-control search-slt" value={this.state.title} name="title" onChange={this.handleChangeInput} placeholder="Search Movie"/>
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

export default Dashboard;