import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import axios from 'axios';

class Dashboard extends Component {
  state = { searchAnime: '', lists: [] };

  handleSearch = async (e) => {
    if (e.key === 'Enter') {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${this.state.searchAnime}`);
        console.log('Anime API Response:', response.data);

        const animeResults = response.data?.data || [];

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
          {lists.map((data, index) => (
            <div className="col-4" key={index}>
              <div className="card">
                <img className="card-img-top" src={data.images.jpg.image_url} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  {/* Use Link to navigate to the anime details page */}
                  <Link to={`/anime/${data.mal_id}`} className="btn btn-primary">
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