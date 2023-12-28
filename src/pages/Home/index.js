import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingResults: [],
      actionResults: [],
      comedyResults: [],
      activeIndex: 0,
    };
  }

  componentDidMount() {
    const apiKey = 'e0974c020cbeb2405fbcd50373c47001'; // Replace with your actual API key

    // Fetch trending movies
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          this.setState({ trendingResults: data.results });
        } else {
          throw new Error('Results not present in the API response');
        }
      })
      .catch(error => console.error('Error fetching trending data:', error));

    // Fetch action movies
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          this.setState({ actionResults: data.results });
        } else {
          throw new Error('Results not present in the API response');
        }
      })
      .catch(error => console.error('Error fetching action data:', error));

    // Fetch comedy movies
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`)
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          this.setState({ comedyResults: data.results });
        } else {
          throw new Error('Results not present in the API response');
        }
      })
      .catch(error => console.error('Error fetching comedy data:', error));
  }

  handlePrev = () => {
    this.setState(prevState => ({
      activeIndex: (prevState.activeIndex - 1 + this.state.trendingResults.length) % this.state.trendingResults.length,
    }));
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeIndex: (prevState.activeIndex + 1) % this.state.trendingResults.length,
    }));
  };

  handleMovieClick = (movieId) => {
  const { history } = this.props;
  const apiKey = 'e0974c020cbeb2405fbcd50373c47001';

  // Fetch movie details
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`;

  fetch(movieDetailsUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.videos && data.videos.results && data.videos.results.length > 0) {
        // Assuming you want to use the key of the first video in the results
        const firstVideoKey = data.videos.results[1].key;

        // Now you can fetch additional details using the video key
        const videoDetailsUrl = `https://api.themoviedb.org/3/movie/${firstVideoKey}?api_key=${apiKey}&append_to_response=videos`;

        fetch(videoDetailsUrl)
          .then((response) => response.json())
          .then((videoData) => {
            // Use videoData as needed
            console.log(videoData);

            // Navigate to the video player page with the movieId and video key
            history.push(`/video/${movieId}?key=${firstVideoKey}`);
          })
          .catch((error) => console.error('Error fetching video details:', error));
      }
    })
    .catch((error) => console.error('Error fetching movie details:', error));
};


  renderCarouselItems(results) {
    const { activeIndex } = this.state;

    const firstThreeMovies = results.slice(0, 3);

    return firstThreeMovies.map((data, index) => (
      <div
        className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
        key={index}
        onClick={() => this.handleMovieClick(data.id)}
        style={{ height: '300px', maxWidth: '100%', overflow: 'hidden', backgroundColor: 'black' }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          className="d-block w-100"
          alt={`Slide ${index + 1}`}
          style={{ height: '300px', width: '200px', objectFit: 'contain' }}
        />
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>{data.title}</h1>
            <p className="opacity-75">{data.overview}</p>
            {/* Add your additional content here */}
          </div>
        </div>
      </div>
    ));
  }

  renderActionMovies() {
    const { actionResults } = this.state;

    const containerStyle = {
      display: 'flex',
      overflowX: 'auto',
      padding: '10px 0',
      gap: '10px',
    };

    const cardStyle = {
      flex: '0 0 auto',
      width: '175px',
      height: '275px',
      backgroundColor: 'black',
      borderRadius: '5px',
      overflow: 'hidden',
    };

    const imageStyle = {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    };

    return (
      <div>
        <h3 style={{ paddingTop: '10px' }}>Action Movies</h3>
        <div style={containerStyle}>
          {actionResults.map((data, index) => (
            <div key={index} style={cardStyle} onClick={() => this.handleMovieClick(data.id)}>
              {/* Card content, you can customize this as needed */}
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={`Action Movie ${index + 1}`}
                style={imageStyle}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  renderComedyMovies() {
    const { comedyResults } = this.state;

    const containerStyle = {
      display: 'flex',
      overflowX: 'auto',
      padding: '10px 0',
      gap: '10px',
    };

    const cardStyle = {
      flex: '0 0 auto',
      width: '175px',
      height: '275px',
      backgroundColor: 'black',
      borderRadius: '5px',
      overflow: 'hidden',
    };

    const imageStyle = {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    };

    return (
      <div>
        <h3 style={{ paddingTop: '10px' }}>Comedy Movies</h3>
        <div style={containerStyle}>
          {comedyResults.map((data, index) => (
            <div key={index} style={cardStyle} onClick={() => this.handleMovieClick(data.id)}>
              {/* Card content, you can customize this as needed */}
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={`Comedy Movie ${index + 1}`}
                style={imageStyle}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { trendingResults } = this.state;

    return (
      <div>
        <h3 style={{ paddingTop: '30px' }}>Popular New Titles</h3>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {Array.from({ length: 3 }, (_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {this.renderCarouselItems(trendingResults)}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
            onClick={this.handlePrev}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
            onClick={this.handleNext}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {this.renderActionMovies()}
        {this.renderComedyMovies()}
      </div>
    );
  }
}

export default withRouter(Home);
