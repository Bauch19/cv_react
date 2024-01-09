import React from 'react';
import Header from '../Header/index';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

const PersonInfo = () =>{
    return(
        <body>
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
                <div className='contenedorImagen'>
                    <div className='imgPerson'>
                        <img src={require('../img/bauch-bg-dark.png')} alt='CV' className='imagenPrincipal' />
                        <div className='circleOverlay' />
                    </div>
                    <div className='textPerson'>
                        <div className='hola'>¡Hola!</div>
                        <div className='soy'>Soy Enrique Bouchet</div>
                        <div className='programador'>Programador</div>
                        <div className='front-end'>Front-End</div>
                    </div>
                </div>
                <div className="banner">
                    <Row className='banner-row'>
                        <Col>
                            <div className="horas">
                                <div className="text-titulo">Horas programando</div>
                                <div className="numeros">11k+</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="cert">
                                <div className="text-titulo">Certificaciones</div>
                                <div className="numeros">8+</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="slogan">
                                Si lo puedes <span className="text-imagnar">imaginar</span>,<br />
                                lo puedes <span className="text-programar">programar</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            </div>
        </body>
    );
}

export default PersonInfo;