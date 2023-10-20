import axios from 'axios';

const API_BASE_URL = 'https://upcoming-light-novels.p.rapidapi.com';
const API_KEY = '77b1a5b4c6msh263c9f3ea5eebefp17b76ajsncea625da721e';

const options = {
  method: 'GET',
  url: `${API_BASE_URL}/lns`,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'upcoming-light-novels.p.rapidapi.com'
  }
};

export const getLightNovelSources = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching light novel sources:', error);
    throw error;
  }
};
