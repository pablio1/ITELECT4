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
                        <div key ={index} class="card shadow-sm">
                            <img class="bd-placeholder-img card-img-top" src={data.image} alt="Card image cap" width="100%" height="225"/>
                            <div class="card-body">
                                <h5 class="card-title">{data.title}</h5>
                                <button class="btn btn-primary">Read</button>
                            </div>
                        </div>
                    )
                })              
            ) : "";

        return (
            <div>
                <div href="/" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none" style={{paddingTop: '20px'}}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <span class="fs-3 fw-semibold" style={{marginLeft: "20px"}}>Advanced Search</span>

                </div>

                <div style={{padding:'5px'}}>
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" onChange={this.handleChangeInput} />
                <button type="button" className="btn btn-primary" onClick={this.handleSearchButton}>Search</button>
                </div>

                <div style={{padding: '10px 5px'}}>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="row mt-4">
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="row mt-4">
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="row mt-4">
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
