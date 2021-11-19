import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Button, Col, Container, Row } from 'reactstrap'

const Resume = () => {
    return (
        <div className="resume ml">
            <h3 className="text-center spacer">
                My Resume
            </h3>
            
                <Container xs={10} >
                    
                        <Col className="col col-8 ms-auto" xs={12} lg={6}>
                            <Row className="mr-auto spacer">
                                <h3 className="spacer mr-auto ">
                                    Chauncey Plummer
                                </h3>
                                <h6 className="spacer ">
                                    Full Stack Web Developer
                                </h6>
                            </Row>
                            <Row className="spacer ">
                                <h4 className="spacer  bg2 ">
                                    Projects
                                </h4>
                                <h5 className="spacer ">
                                Classy Cuts — Full Stack Project
                                </h5>
                                <h6 className="">
                                    Barbershop landing page built using React, Bootstrap, Node, Express

                                </h6>
                                <h5 className="spacer ">
                                GameHop — Front End Project
                                </h5>
                                <h6 className="">
                                    Ecommerce project with a working cart component built with react
                                </h6>
                                <h5 className="spacer ">
                                CoinCap Cryptocurrency App — Front End Project
                                </h5>
                                <h6 className="">
                                    Cryptocurrency app uses coincap 2.0 api to display information for the top 100 Cryptocurrencies, built with react
                                </h6>
                            </Row>
                            <Row className="spacer ">
                                <h4 className="spacer  bg2 ">
                                    Education
                                </h4>
                                <h6 className="spacer ">
                                    NuCamp Full Stack Development Bootcamp, Queens,NY — Diploma
                                </h6>
                                <p className="spacer ">
                                    Full Stack Web Development Certificate Courses completed:Bootstrap, React, Redux, React Native and  Node

                                </p>

                                <h6 className="spacer ">
                                    LaGuardia Community College, Queens,NY — Associates in Applied Science
                                </h6>
                                <p className="spacer ">
                                Associates degree in Network Administration Courses completed:  Intro to Computer systems, Network Security, Advanced Network Security, Unix NOS, Advanced Unix NOS, Windows NT NOS, Advanced Windows NT, Intro to Python and Computer Repair
                                </p>
                            </Row>
                            <Row className="spacer ">
                                <h3 className="bg2  spacer ">
                                    Certificates
                                </h3>
                                <ul className="unstyle">
                                    <li className="spacer">
                                        Nucamp Front End Web and Mobile Development Bootcamp Certificate
                                    </li>
                                    <li className="spacer ">
                                        Nucamp Full Stack Web and Mobile Development Bootcamp Certificate

                                    </li>
                                    <li className="spacer ">
                                        Grasshopper coding fundamentals Certification 

                                    </li>
                                    <li className="spacer ">
                                        Grasshopper coding fundamentals II Certification

                                    </li>
                                    <li className="spacer ">
                                        Grasshopper Intro to Interviewing Certification 

                                    </li>
                                    <li className="spacer ">
                                        Grasshopper Array methods Certification

                                    </li>
                                </ul>
                            </Row>
                        </Col>
                        <Col className="col col-4" xs={12} lg={6}>
                            
                            <Row className="spacer">
                                <h4 className="bg2  spacer text-center">
                                    My Languages
                                </h4>
                                <ul className="unstyle">
                                    <li className="spacer text-center">HTML5</li>
                                    <li className="spacer text-center">CSS3</li>
                                    <li className="spacer text-center">JavaScript</li>
                                </ul>
                            </Row>
                            <Row className="spacer ">
                                <h4 className="bg2  spacer text-center">
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
                        </Col >

                    
                    
                </Container>
        </div>
    )
}

export default Resume
