import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './VideoPlayerPage.css';

const VideoPlayerPage = () => {
  const { id } = useParams();
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    const apiKey = 'e0974c020cbeb2405fbcd50373c47001';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.videos && data.videos.results && data.videos.results.length > 0) {
          // Assuming you want to use the key of the first video in the results
          const firstVideoKey = data.videos.results[0].key;
          setVideoKey(firstVideoKey);
        }
      })
      .catch((error) => console.error('Error fetching video data:', error));
  }, [id]);

  return (
    <div className="video-player-container">
      {videoKey && (
        <iframe
          title="YouTube Video Player"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayerPage;
