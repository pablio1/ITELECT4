import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    state = { searchAnime: '', lists: [] };

    handleSearch = async (e) => {
        if (e.key === "Enter") {
            const encodedParams = new URLSearchParams();
            encodedParams.set('id', this.state.searchAnime);
            encodedParams.set('type', 'movie');
            encodedParams.set('country', 'us');

            const options = {
                method: 'POST',
                url: 'https://gowatch.p.rapidapi.com/lookup/title/tmdb_id',
                params: {
                    id: this.state.searchAnime,
                    type: 'movie',
                    country: 'us'
                },
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': 'e1cc226896mshe0b97afab93eb13p120ebfjsne2371a00db75',
                    'X-RapidAPI-Host': 'gowatch.p.rapidapi.com'
                },
                data: encodedParams,
            };

            try {
                const response = await axios.request(options);
                this.setState({
                    lists: [response.data]
                });
            } catch (error) {
                console.error(error);
            }
        }
    }

    handleChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { lists } = this.state;
        var movieLists = lists.length !== 0 ? lists.map((data, index) => {
            return (
                <Fragment key={index}>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <img className="card-img-top" src={data.image} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                    <div href="#" className="btn btn-warning">Watch</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        }) : "Sorry, Movie Not Found!";

        return (
            <Fragment>
                <div className="row">
                    <div className='col-12'>
                        <div className="form-group">
                            <input
                                name="searchAnime"
                                value={this.state.searchAnime}
                                onKeyDown={this.handleSearch}
                                onChange={this.handleChangeInput}
                                type="text"
                                className="form-control"
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

export default Dashboard;