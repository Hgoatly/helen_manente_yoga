import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './WorkWithMeButton.css';

function WorkWithMeButton() {
  return (
    <div className="work-with-me-button-container">
      <Button as={Link} to="/book" className="work-with-me-button">
        Work with me
      </Button>
    </div>
  );
}

export default WorkWithMeButton;
// This component creates a button that links to the booking page.  