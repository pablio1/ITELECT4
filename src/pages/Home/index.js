// MovieApp.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Sample movie data
const movies = [
  { id: 1, title: 'Movie 1', description: 'Description for Movie 1', videoUrl: 'https://example.com/movie1.mp4' },
  { id: 2, title: 'Movie 2', description: 'Description for Movie 2', videoUrl: 'https://example.com/movie2.mp4' },
  // Add more movie objects here
];

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Movie Listings</h1>
        <ul>
          {movies.map((movie) => (
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
        <video controls>
          <source src={movie.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

class MovieApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/play/:movieId" component={Play} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MovieApp;
