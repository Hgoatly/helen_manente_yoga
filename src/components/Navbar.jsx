// Updated code for Navbar.js
import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Navbar() {
  return (
    <>
      { /*<div className='navigation-menu'>
        <Container fluid>
          <Row> 
            <Button variant="dark"><Link to={"/blog"}>Blogs</Link></Button>
            <Button variant="dark"><Link to={"/about"}>About</Link></Button>
            <Button variant="dark"><Link to={"/home"}>Home</Link></Button>
          </Row>
        </Container>
      </div> */}
      <Container fluid className="navigation">
      
      <Row>
        <Col className="navCol"><Button className="navButton"><Link to={"/blog"}>Blogs</Link></Button></Col>
        <Col className="navCol"><Button className="navButton"><Link to={"/about"}>About</Link></Button></Col>
        <Col className="navCol"> <Button className="navButton"><Link to={"/home"}>Home</Link></Button></Col>
      </Row>
    </Container>
    </>
  );
}


export default Navbar
