import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

const Home = () =>{
    const [ocupacion, setOcupacion] = React.useState('Front End');
    const [animacionEjecutada, setAnimacionEjecutada] = useState(false);

    const ejecutarAnimacion = () => {
        if (!animacionEjecutada) {
          const $quote = document.querySelector(".textPerson");
          const mySplitText = new SplitType($quote, { types: "chars, words, lines" });
          const splitTextTimeline = gsap.timeline();
    
          gsap.set($quote, { perspective: 400 });
    
          splitTextTimeline.from(mySplitText.chars, { duration: 0.2, autoAlpha: 0, scale: 4, force3D: true, stagger: 0.01 }, 0.5)
            .to(mySplitText.words, { duration: 0.1, color: "#8FE402", scale: 0.9, stagger: 0.1 }, "words")
            .to(mySplitText.words, { duration: 0.2, color: "white", scale: 1, stagger: 0.1 }, "words+=0.1")
            .to(mySplitText.words, { duration: 0.2, color: "inherit", scale: 1, stagger: 0.1 }, "+=0.1") // Regresa al color original
            .to(mySplitText.chars, { duration: 0.2, autoAlpha: 1, scale: 1, stagger: 0.01 }, "+=0.1") // Regresa al tamaño original
    
          setAnimacionEjecutada(true);
        }
    };

    useEffect(() => {
        // Cambio de ocupacion
        const intervalo = setInterval(() => {
            if (ocupacion === 'Front End') {
                setOcupacion('Back End');
            } else if (ocupacion === 'Back End'){
                setOcupacion('Full Stack');
            } else {
                setOcupacion('Front End');
            }
        }, 5000);
        ejecutarAnimacion();
        return () => {
            clearInterval(intervalo);
        };
    }, [ocupacion]); // Dependencia para el useEffect
    
    return(
        <body className='body'>
            <Container style={{backgroundColor:'#1A1818'}}>
            <div className='overlay'>
                <div className="ellipse" />
                <div className="ellipse-2" />
                <div className="ellipse-3" />
                <div className="ellipse-4" />
                <div className="ellipse-5" />
                <div className="ellipse-6" />
                <div className="ellipse-7" />
                <div className='personInfo'>
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
                            <div className='front-end'>{ocupacion}</div>
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
                    <Row className='proyecto-sec' style={{marginTop: 50}}>
                        <Col lg="6" sm="12">
                            <div className='proyectos'>
                                <div className="proyecto-titulo">Proyectos</div>
                                <p className='seccionProyecto'>Proyectos que he desarrollado y colaborado</p>
                                <p className='info-proyecto'>La galería completa de mis proyectos desde que comencé en el mundo de la programación</p>
                                <div className='btn-ver-mas'>
                                    <a href='/portafolio'>
                                        Ver más <img src={require('../img/flecha.png')} alt='CV' className='flecha' />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" sm="12">
                            <div className='proyectos-galeria'>
                                <Row>
                                    <Col lg='6' sm='6'>
                                        <div className='proyecto-square'>
                                            <a target='_blank' href='https://play.google.com/store/apps/details?id=com.birdev.autobitv2&hl=es_HN&gl=US'>
                                                <img src={require('../img/proyecto/autobit.webp')} alt='CV' className='proyecto' />
                                                <div className='degradado'></div>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg='6' sm='6'>
                                        <div className='proyecto-square'>
                                            <a target='_blank' href='https://dickissbarbershop.com'>
                                                <img src={require('../img/proyecto/dickiss.png')} alt='CV' className='proyecto' />
                                            </a>
                                        </div>
                                        <div className='degradado'></div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='6' sm='6'>
                                        <div className='proyecto-square'>
                                            <a target='_blank' href='https://skfdistributors.mx'>
                                            <img src={require('../img/proyecto/skf.png')} alt='CV' className='proyecto' />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg='6' sm='6'>
                                        <div className='proyecto-square'>
                                            <a target='_blank' href='https://play.google.com/store/apps/details?id=com.appmirlov01&hl=es_HN&gl=US'>
                                                <img src={require('../img/proyecto/passer.webp')} alt='CV' className='proyecto' />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    {/*Esta seccion es de proyectos destacados*/}
                    <Row className='proyecto-sec-galeria' style={{marginTop: 50}}>
                        <Col lg="6" sm="12">
                            <div className='proyectos-galeria destacados'>
                                <Row>
                                    <Col lg='6' sm='6'>
                                        <div className='proyecto-square'>
                                            <a target='_blank' href='https://dickissbarbershop.com'>
                                                <img src={require('../img/proyecto/dickiss.png')} alt='CV' className='proyecto-destacado' />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg='6' sm='6'>
                                        <div className='proyecto-square'>
                                            <a target='_blank' href='https://apps.apple.com/us/app/autobit/id1550987079'>
                                                <img src={require('../img/proyecto/autobit.webp')} alt='CV' className='proyecto-destacado' />
                                            </a>
                                        </div>
                                    </Col>
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
                    <Row className='sec-programas' style={{marginInline: 20, marginTop: 50}}>
                        <Col lg='12' sm='12' style={{textAlign: 'center', marginBottom: 40}}>
                            <div className="proyecto-titulo">Programas dominados</div>
                        </Col>
                        <div className="row-programas">
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/github-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Git Hub</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/illustrator-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Illustrator</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/mamp-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Mamp</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/photoshop-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Photoshop</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/postgresql-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Postgresql</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/premiere-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Premiere</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/vs-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Visual</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/github-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Git Hub</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/illustrator-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Illustrator</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/mamp-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Mamp</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/photoshop-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Photoshop</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/postgresql-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Postgresql</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/premiere-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Premiere</div>
                            </div>
                            <div class="programa-box">
                                <div class="icono">
                                    <img src={require('../img/programas/vs-gray.png')} alt='programa' className='programas-usados'/>
                                </div>
                                <div class="text">Visual</div>
                            </div>
                        </div>
                    </Row>
                    {/*Sección de contacto*/}
                    <Row className='contacto-sec' style={{marginTop: 90}}>
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
                            <a target='_blank' href='https://www.linkedin.com/in/enrique-bouchet-b873b9285'>
                                <button className='contacto-btn'>
                                    Contacto <img src={require('../img/flecha.png')} alt='CV' className='flecha-contacto' />
                                </button>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
            </Container>
            
        </body>
    );
}

export default Home;