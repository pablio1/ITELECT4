import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: 'Dota Movie 1',
    description: 'Description for Dota Movie 1',
    videoUrl: 'https://www.youtube.com/embed/pnbWipZJq_k',
  },
  {
    id: 2,
    title: 'Dota Movie 2',
    description: 'Description for Dota Movie 1',
    videoUrl: 'https://www.youtube.com/embed/pnbWipZJq_k',
  },
  // Add more movie objects here
];

class MovieList extends Component {
  state = {
    search: '', // Initialize search query
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    // Filter movies based on the search query
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <div>
        <h1>Movie Listings</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a movie"
            value={this.state.search}
            onChange={this.handleSearchChange}
          />
        </div>
        <ul className="movie-list">
          {filteredMovies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/play/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class Play extends Component {
  render() {
    const { movieId } = this.props.match.params;
    const movie = movies.find((m) => m.id === parseInt(movieId));

    if (!movie) {
      return <div>Movie not found.</div>;
    }

    return (
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <iframe title={movie.title} width="560" height="315" src={movie.videoUrl} frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }
}

class MovieApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/play/:movieId" component={Play} />
            <Route exact path="/" component={MovieList} />
            <Redirect from="/home" to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MovieApp;
