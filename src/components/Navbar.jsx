// Updated code for Navbar.js
import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import helenLogo from '../assets/helen-yoga.svg';


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
              <NavDropdown.Item className="nav-link-dropdown" href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item className="nav-link-dropdown" href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-link-dropdown" href="#action/3.3">Something</NavDropdown.Item>
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




