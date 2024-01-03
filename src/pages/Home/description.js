import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class description extends Component {
    constructor(props) {
        super(props);
        this.state = {
          animeDetails: null,
          genres: [],
          episodes: [],
          error: null,
        };
      }
    
      fetchAnimeDetails = async () => {
        const { match } = this.props;
        const id = match.params.id;
      
        try {
          const response = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);
          const genresResponse = await axios.get(`https://kitsu.io/api/edge/anime/${id}/genres`);
          const episodesResponse = await axios.get(`https://kitsu.io/api/edge/anime/${id}/relationships/episodes`);
      
          console.log('Anime Details API response:', response.data.data);
          console.log('Genres API response:', genresResponse.data.data);
          console.log('Episodes API response:', episodesResponse.data.data);
      
          this.setState({ 
            animeDetails: response.data.data,
            genres: genresResponse.data.data,
            episodes: episodesResponse.data.data,
          });
        } catch (error) {
          console.error('Error fetching anime details:', error.response ? error.response.data : error.message);
          this.setState({ error: 'An error occurred while fetching anime details' });
        }
      };
      
      
    
      componentDidMount() {
        this.fetchAnimeDetails();
      }


  render() {
    const { animeDetails, genres, episodes, error } = this.state;

    console.log('Genres:', genres);

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className='container mt-5'>
        {animeDetails ? (
          <div className='d-flex flex-row'>
            <div>
              <img 
                className='border border-dark' 
                style={{ width: 300 }} 
                src={animeDetails.attributes.posterImage.small} 
                alt={animeDetails.attributes.titles.en} 
                />
            </div>
            <div className='px-5'>
              <h2>{animeDetails.attributes.titles.en}</h2>
              <div className="anime-details">
                <p className="mb-2">Other Name: {animeDetails.attributes.titles.en_jp}</p>
                <p className="mb-2">Type: {animeDetails.attributes.showType}</p>
                <p className="mb-2">Total Episodes: {animeDetails.attributes.episodeCount}</p>
                <p className="mb-2">Release Date: {animeDetails.attributes.startDate}</p>
                <p className="mb-2">Status: {animeDetails.attributes.status}</p>
              </div>
              <div className="anime-description mt-3">
                <p className="mb-2">Description: {animeDetails.attributes.synopsis}</p>

              </div>

              <br />

              {/* Genres */}
              <div>
                <h5>Genres:</h5>
                {genres.length > 0 ? (
                  <ul className="list-group d-flex flex-row">
                    {genres.map((genre) => (
                      <li key={genre.id} className="list-group-item mr-2">
                        {genre.attributes.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No genres found.</p>
                )}
              </div>

              <br />

              {/* Episodes */}
              <div>
                <h5>Episodes:</h5>
                <div className="row">
                  {episodes.map((episode) => {
                    console.log(episode); 

                    
                    const episodeCount = episode.id; 
                    

                    return (
                      <div key={episode.id} className="col-md-3 mb-3 border border-dark p-2 d-flex justify-content-center">
                        <Link
                          to={`/episode/${episode.id}`}
                          className="list-group-item"
                        >
                          {`Episode ${String(episodeCount)}`}
                        </Link>
                      </div>
                    );
                  })}
                </div>


              </div>

            </div>
          </div>
        ) : (
          <p>Loading anime details...</p>
        )}
      </div>
    );
  }
}
