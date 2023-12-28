import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MovieTrailerModal from './MovieTrailerModal';
import { fetchVideoKey } from './apiUtils'; // Adjust the path based on your project structure

const PlayMovie = () => {
  const { id } = useParams();
  const history = useHistory();
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchKey = async () => {
      try {
        const key = await fetchVideoKey(id);
        setTrailerKey(key);
      } catch (error) {
        console.error('Error fetching trailer key:', error);
        // Handle error, e.g., redirect back to the movie details
        history.goBack();
      }
    };

    // Log the id to check if it's undefined before making the fetch
    console.log('Movie ID:', id);

    fetchKey();
  }, [id, history]);

  const handleClose = () => {
    // Handle closing the modal or navigate back to the movie details page
    history.goBack();
  };

  return (
    <div>
      {trailerKey && (
        <MovieTrailerModal
          show={true} // Set this to true to display the modal
          handleClose={handleClose}
          trailer={{
            key: trailerKey,
          }}
        />
      )}
    </div>
  );
};

export default PlayMovie;