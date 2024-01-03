// EpisodeList.js
import React from 'react';

const EpisodeList = ({ episodes, onEpisodeClick }) => {
  console.log('Episodes in EpisodeList:', episodes); // Log episodes prop

  return (
    <div>
      <h3>Episodes</h3>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.episode_id} onClick={() => onEpisodeClick(episode.episode_id)}>
            Episode {episode.episode_id}: {episode.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
