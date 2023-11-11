import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    state = { searchAnime: '', lists: [] };

    handleSearch = async (e) => {
        if (e.key === 'Enter') {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${this.state.searchAnime}`);
                console.log('Manga API Response:', response.data);

                // Assuming that the API response has a 'data' property containing an array of results
                const mangaResults = response.data?.data || [];

                this.setState({
                    lists: mangaResults
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }

    componentDidMount() {
        // Automatically load data when the component mounts
        this.handleSearch({ key: 'Enter' });
    }

    handleChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { lists } = this.state;
        const mangaLists = lists.length !== 0 ? (
            <div className="row">
                {lists.map((data, index) => (
                    <div className="col-4" key={index}>
                        <div className="card">
                            <img className="card-img-top" src={data.images.jpg.image_url} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <a href={data.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    Read
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : "Manga Not Found!";

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
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                </div>
                {mangaLists}
            </Fragment>
        );
    }
}

export default Dashboard;
