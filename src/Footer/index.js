import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './style.css';

const Footer = () =>{
    return(
        <footer>
            <Container>
                <Row>
                    <Col lg="6" sm='6'>
                        <Image src={require('../img/logo/bauch.png')} className='img-responsive' rounded />
                    </Col>
                    <Col lg="6" sm='6'>
                        <Row>
                            <Col lg='4' sm='4'>
                                <h5>Redes Sociales</h5>
                                <Row className='redes'>
                                    <a className='red' href='https://www.facebook.com/bauch.ventura' target='_blank'>Facebook</a>
                                    <a className='red' href='https://www.instagram.com/bauchventura/' target='_blank'>Instagram</a>
                                    <a className='red' href='https://www.linkedin.com/in/enrique-bouchet-b873b9285' target='_blank'>LinkedIn</a>
                                </Row>
                            </Col>
                            <Col lg='4' sm='4'>
                                <h5>Enlaces</h5>
                                <Row className='redes'>
                                    <a className='red' href='https://github.com/Bauch19/cv_react' target='_blank'>Git Hub</a>
                                    <a className='red' href='https://drive.google.com/file/d/18H-wCZXIZHsdeJKWcQMsnL-nyJSc8Ruu/view?usp=sharing' target='_blank'>Drive</a>
                                </Row>
                            </Col>
                            <Col lg='4' sm='4'>
                                <h5>Curriculum</h5>
                                <Row className='redes'>
                                    <a className='red' href='https://drive.google.com/file/d/18H-wCZXIZHsdeJKWcQMsnL-nyJSc8Ruu/view?usp=sharing' target='_blank'>Curriculum Vitae</a>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;