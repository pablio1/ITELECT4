// apiUtils.js

export const fetchMovieSourceCode = async (movieId) => {
    const API_URL = `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}/source?api_key=6ebf513aac93128d8b5629e503bf7bde`; // Replace 'your-api-key' with your actual TMDb API key
  
    try {
      const response = await fetch(API_URL);
      const data = await response.text();
  
      return data;
    } catch (error) {
      console.error('Error fetching movie source code:', error);
      throw error;
    }
  };
  
  export const fetchVideoKey = async (movieId) => {
    const apiKey = '6ebf513aac93128d8b5629e503bf7bde'; // Replace 'your-api-key' with your actual TMDb API key
    const url = `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.results && data.results.length > 0) {
        return data.results[0].key;
      } else {
        console.error('No video key found for the movie.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching video key:', error);
      return null;
    }
  };
  