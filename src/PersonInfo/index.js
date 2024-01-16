import React from 'react';
import Header from '../Header/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

const PersonInfo = () =>{
    const [ocupacion, setOcupacion] = React.useState('Front End');
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
                                    <Col lg='6' sm='6'>
                                        <div className='proyecto-square'>
                                            <a href='https://play.google.com/store/apps/details?id=com.birdev.autobitv2&hl=es_HN&gl=US'>
                                                <img src={require('../img/proyecto/autobit.webp')} alt='CV' className='proyecto' />
                                                <div className='degradado'></div>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg='6' sm='6'>
                                        <div className='proyecto-square'>
                                            <a href='https://dickissbarbershop.com'>
                                                <img src={require('../img/proyecto/dickiss.png')} alt='CV' className='proyecto' />
                                            </a>
                                        </div>
                                        <div className='degradado'></div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg='6' sm='6'>
                                        <div className='proyecto-square'>
                                            <a href='https://skfdistributors.mx'>
                                            <img src={require('../img/proyecto/skf.png')} alt='CV' className='proyecto' />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg='6' sm='6'>
                                        <div className='proyecto-square'>
                                            <a href='https://play.google.com/store/apps/details?id=com.appmirlov01&hl=es_HN&gl=US'>
                                                <img src={require('../img/proyecto/passer.webp')} alt='CV' className='proyecto' />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    {/*Esta seccion es de proyectos destacados*/}
                    <Row className='proyecto-sec-galeria'>
                        <Col lg="6" sm="12">
                            <div className='proyectos-galeria destacados'>
                                <Row>
                                    <Col lg='6' sm='6'>
                                        <div className='proyecto-square'>
                                            <a href='https://dickissbarbershop.com'>
                                                <img src={require('../img/proyecto/dickiss.png')} alt='CV' className='proyecto-destacado' />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col lg='6' sm='6'>
                                        <div className='proyecto-square'>
                                            <a href='https://apps.apple.com/us/app/autobit/id1550987079'>
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
                    <Row className='sec-programas' style={{marginInline: 60}}>
                        <Col lg='12' sm='12' style={{textAlign: 'center', marginBottom: 40}}>
                            <div className="proyecto-titulo">Programas dominados</div>
                        </Col>
                        <Row>
                        <Col lg='2' md='4' sm='4'>
                            <div class="text">
                                <div class="icon">
                                    <div class="layer">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span class="fab">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="65px" width="65px" viewBox="0 0 30 30">
                                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                        </svg>
                                        </span>
                                    </div>
                                    <div class="text">Git Hub</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='2' md='4' sm='4'>
                            <div class="text">
                                <div class="icon">
                                <div class="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span class="fab">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="65px" height="65px" viewBox="0 0 30 30">
                                        <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 19.660156 9.2480469 C 20.282156 9.2480469 20.707031 9.6445469 20.707031 10.185547 C 20.707031 10.726547 20.282156 11.123047 19.660156 11.123047 C 19.045156 11.123047 18.615234 10.726547 18.615234 10.185547 C 18.615234 9.6445469 19.045156 9.2480469 19.660156 9.2480469 z M 11.792969 9.953125 L 13.775391 9.953125 L 17.28125 19.818359 L 15.388672 19.818359 L 14.554688 17.296875 L 10.925781 17.296875 L 10.076172 19.818359 L 8.2929688 19.818359 L 11.792969 9.953125 z M 12.6875 11.832031 L 11.335938 15.900391 L 14.144531 15.900391 L 12.804688 11.832031 L 12.6875 11.832031 z M 18.820312 12.339844 L 20.507812 12.339844 L 20.507812 19.818359 L 18.820312 19.818359 L 18.820312 12.339844 z"></path>
                                    </svg>
                                    </span>
                                </div>
                                <div class="text">Illustrator</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='2' md='4' sm='4'>
                            <div class="text">
                                <div class="icon">
                                <div class="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span class="fab">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 50 50">
                                        <path d="M 35.445312 2.0117188 C 35.056812 2.0253438 34.669266 2.1265938 34.322266 2.3085938 C 35.227266 2.7565937 35.865703 3.6414062 35.970703 4.6914062 C 35.988703 4.8174062 36 4.9322812 36 4.9882812 L 36 44.988281 C 36 46.174281 35.306594 47.190734 34.308594 47.677734 C 34.672594 47.876734 35.079 47.988281 35.5 47.988281 C 35.873 47.988281 36.224969 47.901859 36.542969 47.755859 L 36.544922 47.759766 C 38.152922 46.927766 46.192281 42.764703 46.488281 42.595703 C 47.421281 42.060703 48 41.061281 48 39.988281 L 48 9.9882812 C 48 8.9902813 47.505734 8.0619062 46.677734 7.5039062 C 46.357734 7.2869063 36.582031 2.2363281 36.582031 2.2363281 L 36.580078 2.2402344 C 36.224078 2.0727344 35.833813 1.9980938 35.445312 2.0117188 z M 33 3.9882812 C 32.744125 3.9882812 32.487969 4.08575 32.292969 4.28125 C 32.292969 4.28125 26.568469 10.718844 20.230469 17.839844 L 27.724609 23.970703 L 34 18.685547 L 34 4.9882812 C 34 4.7322812 33.902031 4.47625 33.707031 4.28125 C 33.511531 4.08575 33.255875 3.9882812 33 3.9882812 z M 8 10.988281 C 7.844 10.988281 7.5538594 10.988844 6.2558594 11.589844 C 5.5408594 11.920844 3.0507812 13.228516 3.0507812 13.228516 C 2.7207812 13.407516 2.4545781 13.687719 2.2675781 14.011719 C 2.3435781 13.999719 2.4190469 13.988281 2.4980469 13.988281 L 2.5 13.988281 C 3.168 13.988281 3.5776562 14.454469 3.7226562 14.605469 C 3.7226562 14.605469 31.929969 45.332313 32.292969 45.695312 C 32.487969 45.890313 32.742047 45.988281 32.998047 45.988281 C 33.254047 45.988281 33.510078 45.890313 33.705078 45.695312 C 33.900078 45.500312 34 45.244281 34 44.988281 L 34 31.658203 C 34 31.658203 9.53375 11.661813 9.34375 11.507812 C 8.97575 11.173813 8.497 10.988281 8 10.988281 z M 2.1992188 15.988281 C 2.0892188 15.988281 2 16.078453 2 16.189453 L 2 34.794922 C 2 34.901922 2.0873125 34.990234 2.1953125 34.990234 C 2.2513125 34.990234 2.3009375 34.964781 2.3359375 34.925781 L 8 28.638672 L 8 22.007812 L 2.3417969 16.046875 C 2.3057969 16.010875 2.2542188 15.988281 2.1992188 15.988281 z M 12.253906 26.802734 C 12.253906 26.802734 3.6585469 36.452781 3.5605469 36.550781 C 3.2895469 36.821781 2.915 36.988281 2.5 36.988281 C 2.422 36.988281 2.3464844 36.978797 2.2714844 36.966797 C 2.4734844 37.317797 2.7697188 37.607156 3.1367188 37.785156 L 3.1328125 37.791016 C 4.0028125 38.233016 6.8739531 39.691703 7.2519531 39.845703 C 7.4899531 39.940703 7.741 39.988281 8 39.988281 C 8.347 39.988281 8.6900469 39.898656 8.9980469 39.722656 C 9.0210469 39.709656 17.527344 32.552734 17.527344 32.552734 L 12.253906 26.802734 z"></path>
                                    </svg>
                                    </span>
                                </div>
                                <div class="text">VisualStudio</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='2' md='4' sm='4'>
                            <div class="text">
                                <div class="icon">
                                <div class="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span class="fab">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="65px" height="65px" viewBox="0 0 30 30">
                                        <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8 9.9921875 L 11.978516 9.9921875 C 13.947516 9.9921875 15.294922 11.339125 15.294922 13.328125 C 15.294922 15.283125 13.898344 16.623047 11.902344 16.623047 L 9.7636719 16.623047 L 9.7636719 19.857422 L 8 19.857422 L 8 9.9921875 z M 9.7636719 11.46875 L 9.7636719 15.160156 L 11.507812 15.160156 C 12.765813 15.160156 13.503906 14.504125 13.503906 13.328125 C 13.503906 12.119125 12.784672 11.46875 11.513672 11.46875 L 9.7636719 11.46875 z M 19.207031 12.226562 C 20.984031 12.226562 22.099656 13.013047 22.222656 14.373047 L 20.630859 14.373047 C 20.507859 13.847047 20.007844 13.511719 19.214844 13.511719 C 18.442844 13.511719 17.861328 13.881875 17.861328 14.421875 C 17.861328 14.845875 18.21675 15.105391 18.96875 15.275391 L 20.287109 15.576172 C 21.716109 15.897172 22.378906 16.513281 22.378906 17.613281 C 22.378906 19.050281 21.059359 20.007813 19.193359 20.007812 C 17.327359 20.007812 16.151484 19.199844 16.021484 17.839844 L 17.697266 17.839844 C 17.861266 18.393844 18.386375 18.722656 19.234375 18.722656 C 20.088375 18.722656 20.683594 18.346969 20.683594 17.792969 C 20.683594 17.368969 20.363344 17.101359 19.652344 16.943359 L 18.326172 16.636719 C 16.890172 16.308719 16.214844 15.645578 16.214844 14.517578 C 16.214844 13.163578 17.443031 12.226562 19.207031 12.226562 z"></path>
                                    </svg>
                                    </span>
                                </div>
                                <div class="text">Photoshop</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='2' md='4' sm='4'>
                            <div class="text">
                                <div class="icon">
                                <div class="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span class="fab">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="65px" height="65px" viewBox="0 0 24 24">
                                        <path d="M 3.125 1 C 2.219 1 1.5030625 1.4805 1.1640625 2.3125 C 1.0570625 2.5695 1.0029531 2.8420469 1.0019531 3.1230469 C 1.0009531 4.0540469 1.6009375 4.8097188 1.9609375 5.2617188 C 2.0239375 5.3407187 2.080625 5.4110938 2.140625 5.4960938 L 2.3027344 5.7109375 C 2.4637344 5.9219375 2.6470781 6.16125 2.7050781 6.28125 C 2.7240781 6.33625 2.7492031 6.4326875 2.7832031 6.5546875 C 2.9402031 7.1196875 3.2332187 8.16975 3.6992188 8.96875 C 3.8872187 9.29075 4.1517969 9.6954687 4.3417969 9.9804688 C 4.2147969 10.616469 4 11.788 4 12.5 C 4 13.75 4.2592188 14.753875 4.8242188 15.671875 C 5.0332187 15.999875 5.671 17 6.75 17 C 7.133 17 7.7694062 16.850391 7.9414062 15.900391 C 8.7064063 16.887391 10 18.125 12 19 C 12 19 8.2507969 14.625438 7.5917969 11.898438 C 7.5917969 11.898437 6.874625 12.625375 6.265625 14.109375 C 6.083625 13.651375 6 13.135 6 12.5 C 6 11.873 6.2758125 10.471375 6.3828125 9.984375 L 6.4765625 9.5605469 L 6.2304688 9.203125 C 6.2264687 9.196125 5.7227344 8.4688906 5.4277344 7.9628906 C 5.0917344 7.3868906 4.8439375 6.4955781 4.7109375 6.0175781 C 4.6459375 5.7845781 4.594875 5.6159531 4.546875 5.5019531 C 4.371875 5.1229531 4.115625 4.7900937 3.890625 4.4960938 L 3.765625 4.3300781 C 3.702625 4.2390781 3.6193906 4.133625 3.5253906 4.015625 C 3.3423906 3.785625 3.0017188 3.3570312 3.0117188 3.0820312 L 3.1230469 3.0039062 L 3.125 3 C 3.92 3 4.9440781 3.5643437 5.3300781 3.7773438 C 5.4560781 3.8463438 5.5486563 3.8940156 5.5976562 3.9160156 L 5.7714844 3.9921875 L 6.1132812 4.0039062 C 6.5602813 4.0139062 7.9189063 4.0456875 8.8789062 4.4296875 C 10.629906 5.1296875 11.598031 5.830375 12.582031 7.109375 C 14.906031 10.131375 15.763484 14.044984 15.771484 14.083984 L 15.896484 14.648438 L 16.443359 14.826172 C 16.462359 14.833172 17.992922 15.344641 19.419922 16.681641 C 17.624922 17.125641 17 18 17 18 C 17 18 17.476 18.928 19.75 20.375 C 21.125 21.25 21.875 21.875 23 23 C 23 23 21.875688 20.499813 20.304688 18.507812 C 21.500687 18.124813 22.970703 17.925781 22.970703 17.925781 L 22.060547 16.664062 C 20.562547 14.587063 18.553656 13.538859 17.597656 13.130859 C 17.265656 11.864859 16.262969 8.614625 14.167969 5.890625 C 12.968969 4.331625 11.693094 3.3993125 9.6210938 2.5703125 C 8.3940937 2.0803125 6.9187188 2.0218594 6.2617188 2.0058594 C 5.6867187 1.6898594 4.409 1 3.125 1 z M 7.1875 5 C 7.1875 5 6.75 5 6.25 5.125 L 7.625 6.9980469 C 8 6.5000469 8 5.9179688 8 5.9179688 C 8 5.9179688 7.7505 5.25 7.1875 5 z"></path>
                                    </svg>
                                    </span>
                                </div>
                                <div class="text">MySQL</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='2' md='4' sm='4'>
                            <div class="text">
                                <div class="icon">
                                <div class="layer">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span class="fab">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="65px" height="65px" viewBox="0 0 24 24">
                                        <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9.79,9.302H8.674v2.512H9.79 c0.744,0,0.93-0.558,0.93-1.209C10.721,9.953,10.442,9.302,9.79,9.302z M9.79,13.116H8.674V16H7V8h2.698 c2.326,0,2.605,2.14,2.605,2.605C12.302,12.465,11,13.116,9.79,13.116z M16.835,11.6c-0.074-0.008-0.473-0.047-0.551-0.047 c-0.637,0-0.842,0.402-0.92,0.598V16H13.7v-6h1.564l0.047,0.686c0.125-0.254,0.459-0.803,1.084-0.803 c0.274,0,0.402,0.053,0.457,0.076L16.835,11.6z"></path>
                                    </svg>
                                    </span>
                                </div>
                                <div class="text">Premiere</div>
                                </div>
                            </div>
                        </Col>
                        </Row>
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