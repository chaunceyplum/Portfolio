import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Button, Col, Container, Row } from 'reactstrap'

const Resume = () => {
    return (
        <div className="resume">
            <h3 className="text-center spacer">
                My Resume
            </h3>

          





            <Container className='bg1'>
                <Row>
                    <main className="col col-8">
                        <Row>
                            <h3 className="spacer text-center">
                                Chauncey Plummer
                            </h3>
                            <h6 className="spacer text-center">
                                Full Stack Web Developer
                            </h6>
                        </Row>
                        <Row>
                            <h4 className="spacer text-center bg2 rounded">
                                Projects
                            </h4>
                            <h5 className="spacer text-center">
                            Classy Cuts — Full Stack Project
                            </h5>
                            <h6 className="text-center">
                                Barbershop landing page built using React, Bootstrap, Node, Express

                            </h6>
                            <h5 className="spacer text-center">
                            GameHop — Front End Project
                            </h5>
                            <h6 className="text-center">
                                Ecommerce project with a working cart component built with react
                            </h6>
                            <h5 className="spacer text-center">
                            CoinCap Cryptocurrency App — Front End Project
                            </h5>
                            <h6 className="text-center">
                                Cryptocurrency app uses coincap 2.0 api to display information for the top 100 Cryptocurrencies, built with react
                            </h6>
                        </Row>
                        <Row className="spacer text-center">
                            <h4 className="spacer text-center bg2 rounded">
                                Education
                            </h4>
                            <h6 className="spacer text-center">
                                NuCamp Full Stack Development Bootcamp, Queens,NY — Diploma
                            </h6>
                            <p className="spacer text-center">
                                Full Stack Web Development Certificate Courses completed:Bootstrap, React, Redux, React Native and  Node

                            </p>

                            <h6 className="spacer text-center">
                                LaGuardia Community College, Queens,NY — Associates in Applied Science
                            </h6>
                            <p className="spacer text-center">
                            Associates degree in Network Administration Courses completed:  Intro to Computer systems, Network Security, Advanced Network Security, Unix NOS, Advanced Unix NOS, Windows NT NOS, Advanced Windows NT, Intro to Python and Computer Repair
                            </p>
                        </Row>
                        <Row>
                            <h3 className="bg2 rounded spacer text-center">
                                Certificates
                            </h3>
                            <ul className="unstyle">
                                <li className="spacer text-center">
                                    Nucamp Front End Web and Mobile Development Bootcamp Certificate
                                </li>
                                <li className="spacer text-center">
                                    Nucamp Full Stack Web and Mobile Development Bootcamp Certificate

                                </li>
                                <li className="spacer text-center">
                                    Grasshopper coding fundamentals Certification 

                                </li>
                                <li className="spacer text-center">
                                    Grasshopper coding fundamentals II Certification

                                </li>
                                <li className="spacer text-center">
                                    Grasshopper Intro to Interviewing Certification 

                                </li>
                                <li className="spacer text-center">
                                    Grasshopper Array methods Certification

                                </li>
                            </ul>
                        </Row>
                    </main>
                    <aside className="col col-4">
                        <Row className="spacer">
                            <h6>
                                Chaunceyplum@gmail.com
                            </h6>
                        </Row>
                        <Row className="spacer">
                            <h4 className="bg2 rounded spacer text-center">
                                 My Languages
                            </h4>
                            <ul className="unstyle">
                                <li className="spacer text-center">HTML5</li>
                                <li className="spacer text-center">CSS3</li>
                                <li className="spacer text-center">JavaScript</li>
                            </ul>
                        </Row>
                        <Row>
                            <h4 className="bg2 rounded spacer text-center">
                                Skills
                            </h4>
                            <ul className="unstyle">

                                <li className="text-center spacer">React</li>
                                <li className="text-center spacer">React Native</li>
                                <li className="text-center spacer">Redux</li>
                                <li className="text-center spacer">Bootstrap</li>
                                <li className="text-center spacer">Node</li>
                                <li className="text-center spacer">Express</li>
                                <li className="text-center spacer">MongoDB</li>
                                <li className="text-center spacer">Sass</li>
                                <li className="text-center spacer">RESTful Services</li>
                                <li className="text-center spacer">Responsive/Mobile Design</li>
                                <li className="text-center spacer">Git</li>
                            </ul>
                        </Row>
                    </aside >

                </Row>
                
            </Container>
        </div>
    )
}

export default Resume
