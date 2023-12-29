// MovieDetailsModal.js
import { Modal, Button, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieDetailsModal = ({ show, handleClose, movie }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Assuming your API provides additional details like genres, country, and casts
        const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=6ebf513aac93128d8b5629e503bf7bde&append_to_response=genres,credits`;
        const response = await fetch(url);
        const data = await response.json();

        setDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchDetails();
  }, [movie.id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  const { title, poster_path, vote_average, release_date, overview, genres, production_countries, credits } = details;

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} md={6}>
            <img className="card-img-top" style={{ width: '100%' }} src={API_IMG + poster_path} alt={title} />
          </Col>
          <Col xs={12} md={6}>
            <h4>IMDb: {vote_average}</h4>
            <h5>Release Date: {release_date}</h5>
            <h5>Genres: {genres.map(genre => genre.name).join(', ')}</h5>
            <h5>Country: {production_countries.map(country => country.name).join(', ')}</h5>
            <br></br>
            <h6>Overview</h6>
            <p>{overview}</p>
            <h6>Cast:</h6>
            <ul>
              {credits.cast.map(cast => (
                <li key={cast.id}>{cast.name}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieDetailsModal;
