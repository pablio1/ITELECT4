import React, { Component } from 'react';
import './style.css'; // Import the CSS file

// Import your images using relative paths
import image1 from '../../piucturesmovie/movie.png';
import image2 from '../../piucturesmovie/movie2.png';
import image3 from '../../piucturesmovie/movie3.png';
import image4 from '../../piucturesmovie/movie4.png';
import image5 from '../../piucturesmovie/movie5.png';
import image6 from '../../piucturesmovie/movie6.png';

class Home extends Component {
    state = {
        searchQuery: '',
    };

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    handleSearchSubmit = () => {
        // You can handle the search query here, for example, by making an API request.
        // Update this function to fit your specific use case.
        console.log('Search Query:', this.state.searchQuery);
    };

    render() {
        return (
            <div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for something..."
                        value={this.state.searchQuery}
                        onChange={this.handleSearchChange}
                        className="search-input" // Apply the CSS class to the input
                    />
                    <button onClick={this.handleSearchSubmit} className="search-button">
                        Search
                    </button> {/* Apply the CSS class to the button */}
                </div>

                {/* Display the images in a 3x2 grid */}
                <div className="image-grid">
                    <div className="image-row">
                        <img src={image1} alt="Image 1" className="grid-image" />
                        <img src={image2} alt="Image 2" className="grid-image" />
                    </div>
                    <div className="image-row">
                        <img src={image3} alt="Image 3" className="grid-image" />
                        <img src={image4} alt="Image 4" className="grid-image" />
                    </div>
                    <div className="image-row">
                        <img src={image5} alt="Image 5" className="grid-image" />
                        <img src={image6} alt="Image 6" className="grid-image" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
