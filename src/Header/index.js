import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import './style.css'

function Header() {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 text-white" style={{backgroundColor:'transparent', paddingTop:40, paddingInline: 90}}>
          <Container>
            <Navbar.Brand as={NavLink} to="/" className="text-white" style={{fontFamily:'Montserrat'}} href="#">
                <Image src={hovered ? require('../img/logo/logo_bauch_hover.png') : require('../img/logo/logo_bauch.png')}
                      style={{ width: '120px' }}
                      rounded
                      onMouseOver={() => setHovered(true)}
                      onMouseOut={() => setHovered(false)} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="text-white"
              style={{backgroundColor:'transparent',fontFamily:'Montserrat'}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Bauch
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end text-white flex-grow-1 pe-3">
                    <Nav.Link as={NavLink} to="/aboutme">
                        <div className='nav-links'>Sobre mí</div>
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/experience">
                        <div className='nav-links'>Experiencia</div>
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/portafolio">
                        <div className='nav-links'>Portafolio</div>
                    </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;