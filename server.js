const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/manga/search', async (req, res) => {
  try {
    const response = await axios.get('https://mangaverse-api.p.rapidapi.com/manga/search', {
      params: req.query,
      headers: {
        'X-RapidAPI-Key': 'vRwosy7gwomshLnpyvXCwRtMsV2xp1UB1nIjsnJ2w0Rn3CEepK',
        'X-RapidAPI-Host': 'mangaverse-api.p.rapidapi.com',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
