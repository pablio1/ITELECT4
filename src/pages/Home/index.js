import React, { Component } from 'react';
import './style.css'; // Import the CSS file

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
                    <button onClick={this.handleSearchSubmit} className="search-button">Search</button> {/* Apply the CSS class to the button */}
                </div>
            </div>
        );
    }
}

export default Home;
