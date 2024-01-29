import React, { useEffect } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css'

function Header({expand}) {
  useEffect(() => {
    // Configura la animación para el texto del Navbar.Brand
    const headerBrand = document.querySelector(".bauch");
    const headerBrandSplit = new SplitType(headerBrand, { types: "lines" });
    gsap.from(headerBrandSplit.lines, {
      y: -100,
      autoAlpha: 0,
      stagger: 0.1,
      ease: "power3.out",
      duration: 2,
    });

    // Configura la animación para los enlaces Nav.Link
    const navLinks = document.querySelectorAll(".nav-links");
    navLinks.forEach((link) => {
      const linkSplit = new SplitType(link, { types: "lines" });
      gsap.from(linkSplit.lines, {
        y: -100,
        autoAlpha: 0,
        stagger: 0.1,
        ease: "power3.out",
        duration: 2,
      });
    });
  }, [expand]);
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 text-white" style={{backgroundColor:'transparent', paddingTop:40, paddingInline: 90}}>
          <Container>
            <Navbar.Brand as={NavLink} to="/" className="text-white" style={{fontFamily:'Montserrat'}} href="#">
              <div className='nav-links bauch'>Bauch</div>
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
                    <Nav.Link as={NavLink} to="/">
                        <div className='nav-links'>Bauch</div>
                    </Nav.Link>
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