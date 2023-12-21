import { Modal, Button } from 'react-bootstrap';
import React from 'react';

const MovieTrailerModal = ({ show, handleClose, trailer }) => {
  const { key } = trailer;

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Movie Trailer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          title="Trailer"
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${key}`}
          frameBorder="0"
          allowFullScreen
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieTrailerModal;