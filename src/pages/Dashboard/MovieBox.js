import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap"; 

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, overview, vote_average, release_date }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path} alt={title} />
        <div className="card-body">
          <button type="button" className="btn btn-dark" onClick={handleOpenModal}>
            Watch
          </button>

          {/* Bootstrap Modal */}
          <Modal show={showModal} onHide={handleCloseModal}>

            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
                <center><img className="card-img-top" style={{width: '14rem'}} src={API_IMG + poster_path} alt={title} /></center>
                <h2>{title}</h2>
                <h4>Ratings: {vote_average}</h4>
                <h5>Release Date: {release_date}</h5>
                <br></br>
                <h6>Overview</h6>
                <p>{overview}</p>
            </Modal.Body>

            <Modal.Footer>
              
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
