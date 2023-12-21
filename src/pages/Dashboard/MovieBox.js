import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import MovieDetailsModal from './MovieDetailsModal';
import PlayMovie from './PlayMovie';
import SourceCodeDisplay from './SourceCodeDisplay'; // Import the new component
import { fetchVideoKey, fetchMovieSourceCode } from './apiUtils';
import { Link } from 'react-router-dom';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ id, title, poster_path, vote_average, release_date, overview }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showPlayMovie, setShowPlayMovie] = useState(false);
  const [showSourceCode, setShowSourceCode] = useState(false); // State for displaying source code

  const handleShowDetails = () => setShowDetails(true);
  const handleCloseDetails = () => setShowDetails(false);

  const handlePlay = async () => {
    const videoKey = await fetchVideoKey(id);

    if (videoKey) {
      setShowPlayMovie(videoKey);
    }
  };

  const handleViewSourceCode = async () => {
    setShowSourceCode(true);
  };

  const handleCloseSourceCode = () => {
    setShowSourceCode(false);
  };

  return (
    <div className="card text-center mb-3" style={{ cursor: 'pointer' }}>
      <div className="card-body">
        <img className="" style={{ width: '14rem' }} src={API_IMG + poster_path} alt={title} />
        <div className="card-body">
          <Button variant="primary" onClick={handleShowDetails}>View Details</Button>
          <Button variant="success" className="ml-2" onClick={handlePlay}>
            <Link to={`/play/${id}`} style={{ color: 'white', textDecoration: 'none' }}>
              Play Movie
            </Link>
          </Button>
          {/* View Source Code button */}
          <Button variant="info" className="ml-2" style={{ marginTop: '10px' }} onClick={handleViewSourceCode}>
            View Source Code
          </Button>
          <MovieDetailsModal
            show={showDetails}
            handleClose={handleCloseDetails}
            movie={{
              id,
              title,
              poster_path,
              vote_average,
              release_date,
              overview,
              // Add other movie details as needed
            }}
          />
          {showPlayMovie && <PlayMovie videoKey={showPlayMovie} handleClose={setShowPlayMovie} />}
          {showSourceCode && <SourceCodeDisplay show={showSourceCode} handleClose={handleCloseSourceCode} />}
        </div>
      </div>
    </div>
  );
};

export default MovieBox;