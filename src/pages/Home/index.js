import React, { Component } from 'react';
import './style.css'; // Import the CSS file

import movieImage1 from './picturesmovie/movie.PNG';
import movieImage2 from './picturesmovie/movie2.PNG';
import movieImage3 from './picturesmovie/movie3.PNG';
import movieImage4 from './picturesmovie/movie4.PNG';
import movieImage5 from './picturesmovie/movie5.PNG';
import movieImage6 from './picturesmovie/movie6.PNG';

const movieData = [
  {
    title: "Warcraft",
    imageUrl: movieImage1,
    overview: "A movie about the world of Azeroth and the conflict between the Horde and the Alliance.",
  },
  {
    title: "Warcraft (2016)",
    imageUrl: movieImage2,
    overview: "Based on the video game series, the film portrays the initial encounters between the humans and the orcs.",
  },
  {
    title: "Dota Dragonblood",
    imageUrl: movieImage3,
    overview: "An animated series based on the Dota 2 universe, exploring the story of the Dragon Knight, Davion.",
  },
  {
    title: "World of Warcraft Dragonflight (2022)",
    imageUrl: movieImage4,
    overview: "A cinematic experience diving into the fantastical world of World of Warcraft.",
  },
  {
    title: "World of Warcraft Fantasy",
    imageUrl: movieImage5,
    overview: "Immerse yourself in the fantasy realm of World of Warcraft with this epic cinematic journey.",
  },
  {
    title: "War of Warcraft Cinematic Movie",
    imageUrl: movieImage6,
    overview: "Experience the intense battles and rich lore of the War of Warcraft in this cinematic masterpiece.",
  },
];

class Home extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchSubmit = () => {
    console.log('Search Query:', this.state.searchQuery);
    // Add logic here to handle the search query, such as filtering the movieData array.
  };

  render() {
    const { searchQuery } = this.state;
    const filteredMovies = movieData.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for something..."
            value={searchQuery}
            onChange={this.handleSearchChange}
            className="search-input"
          />
          <button onClick={this.handleSearchSubmit} className="search-button">
            Search
          </button>
        </div>

        <div className="image-grid">
          {filteredMovies.map((movie, index) => (
            <div key={index} className="grid-item">
              <img src={movie.imageUrl} alt={movie.title} className="grid-image" />
              <div className="image-caption">
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
