import React from 'react';
import { useParams } from 'react-router-dom';

const ViewSourcePage = () => {
  const { id } = useParams();

  // Fetch and display the source code based on the movie ID
  // You can implement this logic as needed

  return (
    <div>
      <h2>Source Code for Movie {id}</h2>
      {/* Display the source code here */}
    </div>
  );
};

export default ViewSourcePage;