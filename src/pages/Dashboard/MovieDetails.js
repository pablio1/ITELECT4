import React, { useEffect, useState } from 'react';

const MovieDetails = ({ match }) => {
  const { id } = match.params;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=bcc4ff10c2939665232d75d8bf0ec093`;
        const response = await fetch(url);
        const data = await response.json();

        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>ID: {id}</p>
      <p>Overview: {movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Popularity: {movieDetails.popularity}</p>
    </div>
  );
};

export default MovieDetails;