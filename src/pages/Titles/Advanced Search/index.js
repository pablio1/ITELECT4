import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    state = { title: '', results: [] };

    handleChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSearchButton = () => {
        const { title } = this.state;
        const headers = {
            'Access-Control-Allow-Origin': '*'
        };

        axios.get(`https://api.consumet.org/light-novels/readlightnovels/${title}`, { headers })
            .then((response) => {
                this.setState({
                    results: response.data.results
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSearchButton();
        }
    };

    render() {
        const { results } = this.state;

        const books = results.map((data, index) => (
            <div className="col-md-4" key={index}>
                <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" src={data.image} alt="Card image cap" width="100%" height="225" />
                    <div className="card-body">
                        <p className="card-text">{data.description}</p>
                        <h5 className="card-title">{data.title}</h5>
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Bookmark</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Read</button>
                        </div>
                    </div>
                </div>
            </div>
        ));

        const rows = [];
        for (let i = 0; i < books.length; i += 3) {
            const row = (
                <div className="row" key={i}>
                    {books.slice(i, i + 3)}
                </div>
            );
            rows.push(row);
        }

        return (
            <div>
                <div className="container" style={{ display: 'flex', marginTop: '50px' }}>
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChangeInput}
                        style={{ marginRight: '10px' }}
                    />
                    <button className="btn btn-outline-success" type="button" onClick={this.handleSearchButton}>
                        Search
                    </button>
                </div>
                {rows}
            </div>
        );
    }
}

export default Search;
