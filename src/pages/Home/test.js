import React, { Component } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class Home extends Component {
    state = { title: '', results: [], randomNovels: [] };

    componentDidMount() {
        this.fetchRandomNovels();
    }

    fetchRandomNovels = () => {
        const headers = {
            'Access-Control-Allow-Origin': '*'
        };

        axios.get('https://api.consumet.org/light-novels/random', { headers })
            .then((response) => {
                this.setState({
                    randomNovels: response.data.results
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    handleChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSearch = () => {
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
            this.handleSearch();
        }
    };

    renderCarouselItems() {
        const { randomNovels } = this.state;

        return randomNovels.slice(0, 3).map((data, index) => (
            <Carousel.Item key={index}>
                <img
                    className="d-block w-100"
                    src={data.image}
                    alt={`Slide ${index + 1}`}
                />
                <Carousel.Caption>
                    <h3>{data.title}</h3>
                    <p>{data.description || 'No description available'}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ));
    }

    renderCardGrid() {
        const { results } = this.state;

        return results.map((data, index) => (
            <div className="col" key={index}>
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>
                    <div className="card-body">
                        <p className="card-text">{data.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-body-secondary">9 mins</small>
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Bookmark</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Read</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    render() {
        const { results } = this.state;

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
                        onKeyPress={this.handleKeyPress}
                        style={{ marginRight: '10px' }}
                    />
                </div>

                {results.length > 0 && (
                    <div>
                        <h3 style={{ paddingTop: '30px' }}>Popular New Titles</h3>
                        <Carousel>{this.renderCarouselItems()}</Carousel>
                        <div className="album py-5 bg-body-tertiary">
                            <div className="container">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                    {this.renderCardGrid()}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Home;
