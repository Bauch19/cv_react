import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faDisplay, faFilePowerpoint } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const AboutMe = () => {
    return(
        <Container>
            <Row>
                <Col lg="6" sm="6">
                    <Image src={require('../img/bauch-bg-dark.png')} className='img-profile' rounded />
                </Col>
                <Col lg="6" sm="6">
                    <Alert variant="info" className='bg-transparent' style={{border:0}}>
                        <Stack gap={2} className="col">
                        <Alert.Heading>
                            <h2>¡Hola, Soy Enrique Bouchet!</h2>
                        </Alert.Heading>
                        <p>
                            Soy un apasionado programador Front-End con experiencia destacada en la creación de 
                            interfaces atractivas y funcionales utilizando HTML, CSS y React.js. Mi capacidad no 
                            se limita solo al Front-End, ya que también cuento con conocimientos en tecnologías 
                            Back-End como Laravel y Genexus, lo que me permite abordar proyectos de desarrollo 
                            web de manera integral. Mi atención meticulosa a los detalles, respaldada por mi 
                            habilidad en caligrafía, se refleja en mi enfoque para escribir código limpio y legible.
                        </p>
                        <a href='https://drive.google.com/file/d/18H-wCZXIZHsdeJKWcQMsnL-nyJSc8Ruu/view?usp=sharing' target='_blank' className='btn-ver-mas'>Curriculum</a>
                        </Stack>
                    </Alert>
                </Col>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row style={{marginTop:30}}>
                        <Col sm={6}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    <Row>
                                        <Col sm="3">
                                            <div className='iconos'>
                                                <FontAwesomeIcon icon={faDisplay} />
                                            </div>
                                        </Col>
                                        <Col sm="9">
                                        <div className='tab-titulo'>
                                            <h4>Diseño Web</h4>
                                        </div>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    <Row>
                                        <Col sm="3">
                                            <div className='iconos'>
                                                <FontAwesomeIcon icon={faMobileScreenButton} />
                                            </div>
                                        </Col>
                                        <Col sm="9">
                                        <div className='tab-titulo'>
                                            <h4>Diseño Movíl</h4>
                                        </div>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="thrid">
                                    <Row>
                                        <Col sm="3">
                                            <div className='iconos'>
                                                <FontAwesomeIcon icon={faFilePowerpoint} />
                                            </div>
                                        </Col>
                                        <Col sm="9">
                                        <div className='tab-titulo'>
                                            <h4>Ofimática</h4>
                                        </div>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={6}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                            <Tab.Pane eventKey="thrid">Tercer tab content</Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Row>
            
        </Container>
    );
};

export default AboutMe;