import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import MovieBox from './pages/Dashboard/MovieBox';
import MovieDetails from './pages/Dashboard/MovieDetails';
import MovieTrailerPage from './pages/Dashboard/MovieTrailerPage';
import PlayMovie from './pages/Dashboard/PlayMovie';
import ViewSourcePage from './pages/Dashboard/ViewSourcePage';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

const TMDB_API_KEY = '6ebf513aac93128d8b5629e503bf7bde';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error('Error fetching popular movies:', error);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`;
      const res = await fetch(searchUrl);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovie(e);
    }
  };

  return (
    <Router>
      <>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="/home">Movies</Navbar.Brand>
            <Navbar.Brand href="/home">Trending</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-3" style={{ maxHeight: '100px' }} navbarScroll />
              <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
                <FormControl
                  type="search"
                  placeholder="Movie Search"
                  className="me-2"
                  aria-label="search"
                  name="query"
                  value={query}
                  onChange={changeHandler}
                />
                <Button variant="warning" type="submit">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/trailer/:id" component={MovieTrailerPage} />
          <Route path="/play/:id" component={PlayMovie} />

          <Route
            path="/view-source/:id"
            component={ViewSourcePage}
          />

          <Route
            path="/"
            render={() => (
              <div className="container">
                <div className="grid">
                  {movies.length > 0 ? movies.map((movieReq) => (
                    <MovieBox key={movieReq.id} {...movieReq} />
                  )) : <h2>No Movies Found</h2>}
                </div>
              </div>
            )}
          />
        </Switch>
      </>
    </Router>
  );
}

export default App;