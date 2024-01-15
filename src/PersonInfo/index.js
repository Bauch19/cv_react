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
                                    <Col lg='6'><div className='proyecto-square'></div></Col>
                                    <Col lg='6'><div className='proyecto-square'></div></Col>
                                </Row>
                                <Row>
                                    <Col lg='6'><div className='proyecto-square'></div></Col>
                                    <Col lg='6'><div className='proyecto-square'></div></Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            </Container>
        </body>
    );
}

export default PersonInfo;