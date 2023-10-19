import React, { Component } from 'react';
import './style.css'; // Import the CSS file

// Import your images using relative paths
import image1 from './picturesmovie/movie.PNG';
import image2 from './picturesmovie/movie2.PNG';
import image3 from './picturesmovie/movie3.PNG';
import image4 from './picturesmovie/movie4.PNG';
import image5 from './picturesmovie/movie5.PNG';
import image6 from './picturesmovie/movie6.PNG';

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
                        <img src={image1} alt="Image1" className="grid-image" />
                        <img src={image2} alt="Image2" className="grid-image" />
                    </div>
                    <div className="image-row">
                        <img src={image3} alt="Image3" className="grid-image" />
                        <img src={image4} alt="Image4" className="grid-image" />
                    </div>
                    <div className="image-row">
                        <img src={image5} alt="Image5" className="grid-image" />
                        <img src={image6} alt="Image6" className="grid-image" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
