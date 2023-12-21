import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MovieTrailerModal from './MovieTrailerModal';

const MovieTrailerPage = () => {
  const { id } = useParams();
  const history = useHistory();

  // Fetch trailer data based on the movie ID (similar to MovieDetails.js)
  // You can use the same approach as in MovieDetails.js to fetch trailer data

  // Mock trailer data for testing
  const trailer = {
    name: 'Mock Trailer Name',
    key: 'Mock Trailer Key',
  };

  return (
    <div>
      <MovieTrailerModal
        show={true} // Set this to true to display the modal
        handleClose={() => {
          // Handle closing the modal or navigate back to the movie details page
          // Use history.goBack() to go back or other navigation logic
          history.goBack();
        }}
        trailer={trailer} // Pass your trailer data here
      />
    </div>
  );
};

export default MovieTrailerPage;
