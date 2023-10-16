import React, { Component } from 'react';
import axios from 'axios';
import '../Dashboard/main.css'; 

class Dashboard extends Component {
    state = { title: '', results: [] };

    handleChangeInput = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        });
    }

    handleSearchButton = () => {
        const { title } = this.state;
        const headers = {
            'Access-Control-Allow-Origin': '*',
        };
        axios.get('' + title, headers)
            .catch((e) => {
                console.log(e);
                return { status: 401, message: 'Unauthorized' };
            })
            .then((response) => {
                this.setState({
                    results: response.data.results,
                });
            });
    }

    render() {
        var books = this.state.results.length !== 0 ? (
            this.state.results.map((data, index) => {
                console.log(data);
                return (
                    <div key={index} className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={data.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                );
            })
        ) : "";

        return (
            <div className="light-brown-background">
                <title>DASHBOARD PAGE</title>
                <center><h1>DASHBOARD PAGE</h1></center> 
                <center>
                    <a href='/Login' target='blank'>
                    <button className="btn btn-secondary custom-button">
                            <h1 className='address'>LOG IN PAGE</h1>
                        </button>
                    </a>
                </center>

                <div>
                    <br></br>
                    <center><h1>MANWHHHHAAA!!!</h1></center>  

                    <center>
                        <div className='bottom'>
                            <div className="m-3 mt-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-9 col-md-3 col-sm-12 p-0 text-center">
                                        <input type="text" className="form-control search-slt" value={this.state.title} name="title" onChange={this.handleChangeInput} placeholder="Search" />
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <button type="button" className="btn btn-outline-success" onClick={this.handleSearchButton}>Search</button>
                                    </div>
                                </div>
                                <div className='main light-blue-background'>
                                    <div className='left'><h1>left</h1></div>
                                    <div className='right'><h1>RIGHT</h1></div>
                                    <div className='middle'><h1>middle</h1></div>
                                </div>
                                <div className="row mt-5">
                                    {books}
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}

export default Dashboard;



//https://api.consumet.org/light-novels/readlightnovels/