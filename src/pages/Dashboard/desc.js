import React, { Component } from 'react';
import axios from 'axios';

class desc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangaDetails: null,
      error: null,
    };
  }

  fetchMangaDetails = async () => {
    const { match } = this.props;
    const mal_id = match.params.mal_id;

    try {
      const response = await axios.get(`https://api.jikan.moe/v4/manga/${mal_id}`);
      console.log('Manga Details API response:', response.data);

      this.setState({ mangaDetails: response.data });
    } catch (error) {
      console.error('Error fetching manga details:', error);
      this.setState({ error: 'An error occurred while fetching manga details' });
    }
  };

  componentDidMount() {
    this.fetchMangaDetails();

  }



  render() {
    const { mangaDetails, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className='container mt-5'>
        {mangaDetails ? (
          <div className='d-flex flex-row'>
            <div>
              <img className='border border-dark' style={{ width: 300 }} src={mangaDetails.data.images.jpg.image_url} alt={mangaDetails.title} />
            </div>
            <div className='px-5'>
              <h2>{mangaDetails.data.title}</h2>
              <p className="mb-0">Rank: {mangaDetails.data.rank}</p>
              <p className="mb-0">Authors: {mangaDetails.data.authors.map((author) => (
                  <span key={author.mal_id}>{author.name}</span>
                 ))}
              </p>
              <p className="mb-0">Status: {mangaDetails.data.status}</p>
              <p className="mb-0">Type: {mangaDetails.data.type}</p>
              <p className="mb-0">Published: {mangaDetails.data.published.string}</p>
              <p className="mb-0">Popularity: {mangaDetails.data.popularity}</p>
              <p className='mb-0 d-flex align-items-center'> Score: 
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '5px', marginRight: '5px'}} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg> 
                {mangaDetails.data.score}</p>
              <hr />
              <p>{mangaDetails.data.synopsis}</p>

              {/* Genres */}
              <div>
                <h5>Genres:</h5>
                <ul className="list-group d-flex flex-row">
                  {mangaDetails.data.genres.map((genre) => (
                    <li key={genre.mal_id} className="list-group-item mr-2">{genre.name}</li>
                  ))}
                </ul>
              </div>
         

              
            </div>
          </div>
          
        ) : (
          <p>Loading manga details...</p>
        )}
      </div>
    );
  }
}

export default desc;