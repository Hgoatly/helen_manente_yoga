import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PartnersComponent.css';
import badgellsWood from '../assets/badgells_wood.png';
import heavyMetalTherapy from '../assets/heavy-metal-therapy.jpg';
import innOnLake from '../assets/inn-on-lake-logo.png';
import ram from '../assets/ram.png';
import smolLogo from '../assets/smol_logo .jpeg';
import lkLogo from '../assets/lk-logo-large.png';
import nrg from '../assets/nrg.webp';
import middleEarthYoga from '../assets/middle_earth_yoga_logo.png';

const partners = [
  { id: 1, name: 'Badgells Wood', logo: badgellsWood, link: 'https://www.badgellswoodcamping.co.uk/' },
  { id: 2, name: 'Heavy Metal Therapy', logo: heavyMetalTherapy, link: 'https://heavymetaltherapy.co.uk/' },
  { id: 3, name: 'Inn on The Lake', logo: innOnLake, link: 'https://innonlake.co.uk/' },
  { id: 4, name: 'NRG', logo: nrg, link: 'https://nrggym.com/gyms/gravesend/' },
  { id: 5, name: 'Royal Academy of Music', logo: ram, link: 'https://www.ram.ac.uk/' },
  { id: 6, name: 'Smol', logo: smolLogo, link: 'https://smol.com/uk' },
  { id: 7, name: 'Middle Earth Yoga', logo: middleEarthYoga, link: 'https://middle-earth.yoga/' },
  { id: 8, name: 'Laura Knox', logo: lkLogo, link: 'https://lauraknox.com/' },
];

// ...existing code...

function PartnersComponent() {
  return (
    <Container>
    <h1 style={{ marginTop: '35px' }}>My partners</h1>
      <Row className="partners-row">
        {partners.map((p) => (
          <Col 
            key={p.id} 
            xs={6} 
            md={3} 
            lg={4} 
            className="partner-col text-center d-flex flex-column justify-content-between align-items-center" 
            style={{ height: '380px' }} 
          >
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={p.logo} alt={p.name} style={{ maxWidth: '150px' }} />
            </div>
            <h3><a href={p.link} style={{ textDecoration: 'none', color: '#26433b' }}>{p.name}</a></h3>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PartnersComponent;
// ...existing code...