import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      activeIndex: 0,
    };
  }

  componentDidMount() {
    const apiKey = 'e0974c020cbeb2405fbcd50373c47001'; // Replace with your actual API key
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (!data.results) {
          throw new Error('Results not present in the API response');
        }
        this.setState({ results: data.results });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  handlePrev = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex - 1 + this.state.results.length) % this.state.results.length,
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      activeIndex: (prevState.activeIndex + 1) % this.state.results.length,
    }));
  };

  renderCarouselItems() {
    const { results, activeIndex } = this.state;

    // Take the first three movies
    const firstThreeMovies = results.slice(0, 3);

    return firstThreeMovies.map((data, index) => (
      <div
        className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
        key={index}
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

  render() {
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
            {this.renderCarouselItems()}
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
      </div>
    );
  }
}

export default Home;
