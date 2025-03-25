import React from 'react';
import './Hero.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import heroImage from '../../assets/helen-manente-hero.jpg';
import helenLogo from '../../assets/helen-yoga.svg';

function Hero() {
  return (
    <Container fluid className="hero-container">
      <Row>
        <Col>
          <img className='hero-image' src={heroImage} alt="Yoga pose" />
          <img className='helen-logo' src={helenLogo} alt="Helen Logo" />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
