import React, { useEffect, useState } from 'react';

const MovieSourceCode = ({ match }) => {
  const { id } = match.params;
  const [sourceCode, setSourceCode] = useState(null);

  useEffect(() => {
    const fetchSourceCode = async () => {
      try {
        // Replace this with your API endpoint to fetch movie source code
        const sourceCodeUrl = `https://api.themoviedb.org/3/movie/source/${id}`;
        const response = await fetch(sourceCodeUrl);
        const data = await response.text();
        setSourceCode(data);
      } catch (error) {
        console.error('Error fetching movie source code:', error);
        setSourceCode('Error fetching source code');
      }
    };

    fetchSourceCode();
  }, [id]);

  return (
    <div>
      <h2>Source Code</h2>
      {sourceCode !== null ? (
        <pre>{sourceCode}</pre>
      ) : (
        <p>Loading source code...</p>
      )}
    </div>
  );
};

export default MovieSourceCode;