// Updated code for Navbar.js
import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import helenLogo from '../assets/sage_green_logo.svg';
import { HashLink } from 'react-router-hash-link';


function HelenNavbar() {
  return (
    <Navbar expand="lg" className="helen-navbar" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/"><img className="helen-logo-navbar" src={helenLogo} alt="Helen Manente Yoga" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle">Menu</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link className="nav-link" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/about">About</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link className="nav-link" as={Link} to="/contact">Contact</Nav.Link>
            <NavDropdown title="Classes" id="basic-nav-dropdown">
            <NavDropdown.Item className="nav-link-dropdown" as={Link} to="/classes">Classes Overview</NavDropdown.Item>
              <NavDropdown.Item className="nav-link-dropdown" href="#action/3.1"><HashLink smooth to="/classes#badgells-wood">Badgells Wood</HashLink></NavDropdown.Item>
              <NavDropdown.Item className="nav-link-dropdown"><HashLink smooth to="/classes#yoga-and-music">Yoga and Music</HashLink>
              
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link-dropdown"><HashLink smooth to="/classes#royal-academy">Royal Academy of Music</HashLink></NavDropdown.Item>
              <NavDropdown.Item className="nav-link-dropdown"><HashLink smooth to="/classes#royal-academy">Metal Yoga</HashLink></NavDropdown.Item>
              <NavDropdown.Item className="nav-link-dropdown"><HashLink smooth to="/classes#mindful-meetings">Mindful Meetings</HashLink></NavDropdown.Item>
              <NavDropdown.Item className="nav-link-dropdown">NRG GYM Gravesend</NavDropdown.Item>
              <NavDropdown.Item className="nav-link-dropdown"><HashLink smooth to="/classes#private-classes">Private Classes</HashLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-link-dropdown" as={Link} to="/book">
                Book a class
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HelenNavbar;




