import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css'

function Header() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 text-white" style={{backgroundColor:'transparent', paddingTop:40, paddingInline: 90}}>
          <Container>
            <Navbar.Brand as={NavLink} to="/" className="text-white" style={{fontFamily:'Montserrat'}} href="#">
                <Button variant="outline-light" style={{borderRadius:50, paddingInline:20}}>Bauch</Button>
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