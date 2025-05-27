import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <>
        <footer className="helen-footer">
        <Container>
        <Row className='footer-row'>
        <Col><a href="/">
            <img src="src\assets\helen-yoga.svg" alt="Helen Manente Yoga Logo" className="footer-logo" />
            </a>
            </Col>
          <Col>
            <ul className="footer-links" role="list">
              <li role="listItem"><a href="/">Home</a></li>
              <li role="listItem"><a href="/about">About</a></li>
              <li role="listItem"><a href="/blog">Blog</a></li>
              <li role="listItem"><a href="/book">Book a Class</a></li>
            </ul>  
          </Col>
            <Col>
                <ul className="footer-links" role="list">
                    <li role="listItem"><a href="">Contact</a></li>
                    <li role="listItem"><a href="https://www.facebook.com/profile.php?id=100086441554105" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li role="listItem"><a href="https://www.instagram.com/helenmanenteyoga" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li role="listItem"><a href="https://www.youtube.com/channel/UC1Z5k4b2f8e9c3d7e5f8e9c" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                </ul>
            </Col>
            
            <p className="footer-copyright text-center">© {new Date().getFullYear()} Helen Manente Yoga. All rights reserved.</p>
        </Row>
      </Container>
        </footer>
        
        </>
    )
}

export default Footer;