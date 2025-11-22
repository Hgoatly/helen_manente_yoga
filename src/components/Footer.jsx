import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import helenLogo from '../assets/sage_green_logo.svg';
import bwyLogo from '../assets/bwy_logo.png';
import yapLogo from '../assets/yap_logo.png';

function Footer() {
    return(
        <>
        <footer className="helen-footer">
        <Container>
        <Row className='footer-row'>
        <Col className="logo-column"><Link to="/" className="logo-footer-link"><img className="footer-logo" src={helenLogo} alt="Helen Manente Yoga" />
            </Link>
            </Col>
          <Col>
            <ul className="footer-links" role="list">
              <li role="listItem"><Link to="/">Home</Link></li>
              <li role="listItem"><Link to="/about">About</Link></li>
              <li role="listItem"><Link to="/blog">Blog</Link></li>
              <li role="listItem"><Link to="/book">Book</Link></li>
            </ul>  
          </Col>
            <Col>
                <ul className="footer-links" role="list">
                <li role="listItem"><Link to="/contact">Contact</Link></li>
                    <li role="listItem"><a href="https://www.facebook.com/profile.php?id=100086441554105" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li role="listItem"><a href="https://www.instagram.com/helenmanenteyoga" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li role="listItem"><Link to="/partners">Partners</Link></li>
                </ul>
            </Col>
            
       <Row className='affilliation-row'>
        <img className="affilliation-logo" src={yapLogo} alt="Yoga alliance professionals yoga teacher" />
        
            <img className="affilliation-logo" src={bwyLogo} alt="British wheel of yoga accredited teacher" />
            </Row>
            
            <p className="footer-copyright text-center">© {new Date().getFullYear()} Helen Manente Yoga. All rights reserved.</p>
        </Row>
       
      </Container>
        </footer>
        
        </>
    )
}

export default Footer;