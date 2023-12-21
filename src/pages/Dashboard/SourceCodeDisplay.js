import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { fetchMovieSourceCode } from './apiUtils';


const SourceCodeDisplay = ({ show, handleClose }) => {
  const { id } = useParams();
  const history = useHistory();
  const [sourceCode, setSourceCode] = useState('');

  useEffect(() => {
    const fetchSourceCode = async () => {
      try {
        const code = await fetchMovieSourceCode(id);
        setSourceCode(code);
      } catch (error) {
        console.error('Error fetching movie source code:', error);
        // Handle error, e.g., redirect back
        history.goBack();
      }
    };

    fetchSourceCode();
  }, [id, history]);

  const handleCloseModal = () => {
    // Handle closing the modal or navigate back
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleCloseModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Movie Source Code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <pre>
          <code>{sourceCode}</code>
        </pre>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SourceCodeDisplay;