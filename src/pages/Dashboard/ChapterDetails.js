import React, { Component } from 'react';
import axios from 'axios';

class ChapterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapterDetails: null,
      error: null,
    };
  }

  fetchChapterDetails = async () => {
    const { match } = this.props;
    const chapterId = match.params.chapterId;

    try {
      
      const response = await axios.get(`https://kitsu.io/api/edge/chapters/${chapterId}`);

      console.log('Chapter Details API response:', response);

      this.setState({
        chapterDetails: response.data.data,
        error: null,
      });
    } catch (error) {
      console.error('Error fetching chapter details:', error);
      this.setState({ error: 'An error occurred while fetching chapter details' });
    }
  };

  componentDidMount() {
    this.fetchChapterDetails();
  }

  render() {
    const { chapterDetails, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className="container mt-5 pb-5">
        {chapterDetails ? (
          <div>
            <h2>{chapterDetails.attributes.titles.en}</h2>
            {/* Display other chapter details as needed */}
          </div>
        ) : (
          <p>Loading chapter details...</p>
        )}
      </div>
    );
  }
}

export default ChapterDetails;