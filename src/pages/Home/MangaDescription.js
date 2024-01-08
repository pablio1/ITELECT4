import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MangaDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangaDetails: null,
      genres: [],
      chapters: [],
      error: null,
    };
  }

  fetchMangaDetails = async () => {
    const { match } = this.props;
    const mangaId = match.params.mangaId;

    try {
      
      const response = await axios.get(`https://kitsu.io/api/edge/manga/${mangaId}`);
      const genresResponse = await axios.get(`https://kitsu.io/api/edge/manga/${mangaId}/genres`);
      const chaptersResponse = await axios.get(`https://kitsu.io/api/edge/manga/${mangaId}/relationships/chapters`);


      console.log('Manga Details API response:', response);
      console.log('Genres API response:', genresResponse);
      console.log('Chapters API response:', chaptersResponse);

      this.setState({
        mangaDetails: response.data.data,
        genres: genresResponse.data.data,
        chapters: chaptersResponse.data.data,
        error: null,
      });
    } catch (error) {
      console.error('Error fetching manga details:', error);
      this.setState({ error: 'An error occurred while fetching manga details' });
    }
  };

  componentDidMount() {
    this.fetchMangaDetails();
  }

  render() {
    const { mangaDetails, genres, chapters, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className="container mt-5 pb-5">
        <div className="mb-3">
          <Link to="/dashboard">Back</Link>
        </div>
        {mangaDetails ? (
          <div className="d-flex flex-row">
            <div>
              <img
                className="border border-dark"
                style={{ width: 300 }}
                src={mangaDetails.attributes.posterImage.small}
                alt={mangaDetails.attributes.titles.en}
              />
            </div>
            <div className="px-5">
              <h2>{mangaDetails.attributes.titles.en}</h2>
              <p className="mb-0">Rank: {mangaDetails.attributes.popularityRank}</p>
              <p className="mb-0">Status: {mangaDetails.attributes.status}</p>
              <p className="mb-0">Type: {mangaDetails.attributes.mangaType}</p>
              <p className="mb-0">Published: {mangaDetails.attributes.startDate}</p>
              <p className="mb-0">Popularity: {mangaDetails.attributes.popularityRank}</p>
              <p className="mb-0 d-flex align-items-center">
                Score:{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginLeft: '5px', marginRight: '5px' }}
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                {mangaDetails.attributes.averageRating}
              </p>
              <hr />
              <p>{mangaDetails.attributes.synopsis}</p>

              {/* Genres */}
              <div>
                <h5>Genres:</h5>
                <ul className="list-group d-flex flex-row">
                  {genres.map((genre) => (
                    <li key={genre.id} className="list-group-item mr-2">
                      {genre.attributes.name}
                    </li>
                  ))}
                </ul>
              </div>

              <br />

              {/* Chapters */}
              <div>
                <h5>Chapters:</h5>
                <div className="row">
                  {chapters.map((chapter) => {
                    console.log(chapter); 

                   
                    const chapterNumber = chapter.id; 
                   

                    return (
                      <div key={chapter.id} className="col-md-3 mb-3 border border-dark p-2 d-flex justify-content-center">
                        <Link
                          to={`/chapter/${chapter.id}`}
                          className="list-group-item"
                        >
                          {`Chapter ${String(chapterNumber)}`}
                        </Link>
                      </div>
                    );
                  })}
                </div>


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

export default MangaDescription;