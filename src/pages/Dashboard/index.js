import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
  state = { searchAnime: '', lists: [] };

  handleSearch = async (e) => {
    if (e.key === 'Enter') {
      try {
        const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${this.state.searchAnime}`);
        console.log('Anime API Response:', response.data);

        const animeResults = response.data.data || [];

        this.setState({
          lists: animeResults,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  componentDidMount() {
    // Automatically load data when the component mounts
    this.handleSearch({ key: 'Enter' });
  }

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { lists } = this.state;
    const animeLists =
      lists.length !== 0 ? (
        <div className="row">
          {lists.map((data) => (
            <div className="col-4" key={data.id}>
              <div className="card">
                <img className="card-img-top" src={data.attributes.posterImage.original} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{data.attributes.titles.en || data.attributes.titles.en_jp}</h5>
                  <Link to={`/anime/${data.id}`} className="btn btn-primary">
                    Watch
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        'Anime Not Found!'
      );

    return (
      <Fragment>
        <div className="row">
          <div className="col-9">
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
        {animeLists}
      </Fragment>
    );
  }
}

export default Dashboard;
