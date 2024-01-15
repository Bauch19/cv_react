import React from 'react';
import Header from '../Header/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

const PersonInfo = () =>{
    return(
        <body>
            <Container>
            <div className='overlay'>
                <div className="ellipse" />
                <div className="ellipse-2" />
                <div className="ellipse-3" />
                <div className="ellipse-4" />
                <div className="ellipse-5" />
                <div className="ellipse-6" />
                <div className="ellipse-7" />
                <div className='personInfo'>
                    <Header />
                    {/*Esta seccion es de presentacion*/}
                    <Row>
                        <Col lg="6" sm="12">
                        <div className='imgPerson'>
                            <img src={require('../img/bauch-bg-dark.png')} alt='CV' className='imagenPrincipal' />
                            <div className='circleOverlay' />
                        </div>
                        </Col>
                        <Col lg="6" sm="12">
                        <div className='textPerson'>
                            <div className='hola'>¡Hola!</div>
                            <div className='soy'>Soy Enrique Bouchet</div>
                            <div className='programador'>Programador</div>
                            <div className='front-end'>Front-End</div>
                        </div>
                        </Col>
                    </Row>
                    {/*Esta seccion es de el slogan*/}
                    <div className="banner">
                        <Row style={{alignSelf: 'center', justifyContent: 'space-between'}}>
                            <Col lg="3" sm="12">
                                <div className="horas">
                                    <div className="text-titulo">Horas programando</div>
                                    <div className="numeros">11k+</div>
                                </div>
                            </Col>
                            <Col lg="3" sm="12">
                                <div className="cert">
                                    <div className="text-titulo">Certificaciones</div>
                                    <div className="numeros">8+</div>
                                </div>
                            </Col>
                            <Col lg="6" sm="12">
                                <div className="slogan">
                                    Si lo puedes <span className="text-imagnar">imaginar</span>, 
                                    lo puedes <span className="text-programar">programar {'</>'} </span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/*Esta seccion es de proyectos*/}
                    <Row className='proyecto-sec'>
                        <Col lg="6" sm="12">
                            <div className='proyectos'>
                                <div className="proyecto-titulo">Proyectos</div>
                                <p className='seccionProyecto'>Proyectos que he desarrollado y colaborado</p>
                                <p className='info-proyecto'>La galería completa de mis proyectos desde que comencé en el mundo de la programación</p>
                                <div className='btn-ver-mas'>Ver más <img src={require('../img/flecha.png')} alt='CV' className='flecha' /></div>
                            </div>
                        </Col>
                        <Col lg="6" sm="12">
                            <div className='proyectos-galeria'>
                                <Row>
                                    <Col lg='6' sm='6'><div className='proyecto-square'></div></Col>
                                    <Col lg='6' sm='6'><div className='proyecto-square'></div></Col>
                                </Row>
                                <Row>
                                    <Col lg='6' sm='6'><div className='proyecto-square'></div></Col>
                                    <Col lg='6' sm='6'><div className='proyecto-square'></div></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    {/*Esta seccion es de proyectos destacados*/}
                    <Row className='proyecto-sec-galeria'>
                        <Col lg="6" sm="12">
                            <div className='proyectos-galeria destacados'>
                                <Row>
                                    <Col lg='6' sm='6'><div className='proyecto-square'></div></Col>
                                    <Col lg='6' sm='6'><div className='proyecto-square'></div></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col lg="6" sm="12">
                            <div className='proyectos'>
                                <div className="proyecto-titulo">Destacados</div>
                                <p className='seccionProyecto'>Proyectos Destacados</p>
                                <p className='info-proyecto'>Los proyectos destacados del último año que desarrolle</p>
                            </div>
                        </Col>
                    </Row>
                    {/*Sección de programas*/}
                    <Row className='sec-programas'>
                        <Col lg='2' md='4' sm='6'>
                            <img src={require('../img/programas/github-gray.png')} alt='program' className='img-program' />
                        </Col>
                        <Col lg='2' md='4' sm='6'>
                            <img src={require('../img/programas/illustrator-gray.png')} alt='program' className='img-program' />
                        </Col>
                        <Col lg='2' md='4' sm='6'>
                            <img src={require('../img/programas/vs-gray.png')} alt='program' className='img-program' />
                        </Col>
                        <Col lg='2' md='4' sm='6'>
                            <img src={require('../img/programas/photoshop-gray.png')} alt='program' className='img-program' />
                        </Col>
                        <Col lg='2' md='4' sm='6'>
                            <img src={require('../img/programas/mamp-gray.png')} alt='program' className='img-program' />
                        </Col>
                        <Col lg='2' md='4' sm='6'>
                            <img src={require('../img/programas/premiere-gray.png')} alt='program' className='img-program' />
                        </Col>
                    </Row>
                    {/*Sección de contacto*/}
                    <Row className='contacto-sec'>
                        <Col lg='12' sm='12'>
                            <div className='contacto-info'>
                                <p>
                                ¿Te gusta algo de lo que ves?, ¿Tienes alguna pregunta?
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='contacto-footer'>
                        <Col lg='6' sm='6'>
                            <div className='contacto-msj'>
                                <p>Contacta me y podré resolver tus dudas</p>
                            </div>
                        </Col>
                        <Col lg='6' sm='6'>
                            <a href='https://www.linkedin.com/in/enrique-bouchet-b873b9285'>
                                <button className='contacto-btn'>
                                    Contacto <img src={require('../img/flecha.png')} alt='CV' className='flecha-contacto' />
                                </button>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
            </Container>
            <footer>
                <Container>
                    <Row>
                        <Col lg="6" sm='6'>
                            <h2>Bauch Portafolio</h2>
                        </Col>
                        <Col lg="6" sm='6'>
                            <Row>
                                <Col lg='4' sm='4'>
                                    <h5>Redes Sociales</h5>
                                    <Row className='redes'>
                                        <a className='red' href='https://www.facebook.com/bauch.ventura'>Facebook</a>
                                        <a className='red' href='https://www.instagram.com/bauchventura/'>Instagram</a>
                                        <a className='red' href='https://www.linkedin.com/in/enrique-bouchet-b873b9285'>LinkedIn</a>
                                    </Row>
                                </Col>
                                <Col lg='4' sm='4'>
                                    <h5>Enlaces</h5>
                                    <Row className='redes'>
                                    <a className='red' href='https://github.com/Bauch19/cv_react'>Git Hub</a>
                                        <a className='red' href='https://drive.google.com/file/d/18H-wCZXIZHsdeJKWcQMsnL-nyJSc8Ruu/view?usp=sharing'>Drive</a>
                                    </Row>
                                </Col>
                                <Col lg='4' sm='4'>
                                    <h5>Curriculum</h5>
                                    <Row className='redes'>
                                        <a className='red' href='https://drive.google.com/file/d/18H-wCZXIZHsdeJKWcQMsnL-nyJSc8Ruu/view?usp=sharing'>Curriculum Vitae</a>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </body>
    );
}

export default PersonInfo;