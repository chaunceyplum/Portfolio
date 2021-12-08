import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardImg, Col, Container, Row } from 'reactstrap'
import {projects} from './projects'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaReact, FaHtml5, FaCss3, FaNodeJs, FaJs, FaBootstrap } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css';




const Home = () => {
    const Projects = useState(projects)
    
    
    
    
    return (
        <div className="bg">
            <Container className="bg spacer">
                <Row className="bg space-evenly">
                    <Col className="bg1 " xs={12} lg={3}>
                        <h3 className=" spacer" >
                            Chauncey Plummer
                        </h3>
                        <h6 className="spacer">
                            Front End Web Developer
                        </h6>
                        <img />

                        <h6 className="spacer">
                            About Me
                        </h6>
                        <p>
                        An infectiously enthusiastic Front End Web Developent Bootcamp graduate with fundamental knowledge of web development. Seeking to utilize advanced expertise in javaScript
                        </p>
                        <h6 className="spacer">
                            Technologies I use
                        </h6>
                        <ul className="unstyle spacer ">
                            <li className="unstyle spacer "><FaReact /> React</li>
                            <li className="unstyle spacer "><FaNodeJs /> Node Js</li>
                            <li className="unstyle spacer "><FaBootstrap />Bootstrap</li>
                        </ul>
                        
                        <Row className="centerFooter justify-content-space-evenly spacer" >
                        
                            {/* <Col className="d-flex justify-content-center spacer">
                                <Button href='https://www.instagram.com/chaveloper/' className='buttons' size="20em">
                                    <FaInstagram />
                                </Button>
                            </Col> */}
                            <Col className="d-flex justify-content-center spacer">
                                <Button href='https://www.linkedin.com/in/chauncey-plummer-5457361bb/' className='buttons' size="20em">
                                    <FaLinkedin />
                                </Button>
                            </Col>
                            <Col className="d-flex justify-content-center spacer">
                                <Button href='https://twitter.com/chaunce_dev' className='buttons'  size="20em">
                                    <FaTwitter />
                                </Button>
                            </Col>
                            <Col className="d-flex justify-content-center spacer">
                                
                                <Button href='https://github.com/chaunceyplum'className='buttons'  >
                                    <FaGithub />
                                </Button>
                            </Col>
                    
                        </Row>


                        

                    </Col>
                    <Col xs={1}/>
                    <Col className="bg1 " xs={12} lg={8}>
                        <h3 className="spacer">
                            My Projects
                        </h3>
                        <div className="col-10 justify-content-center mx-auto space-evenly rounded" md={8} xs={12}>
                            {
                                projects.map((project, index) => {
                                    return(
                                        <div className=""  key={index}>
                                            <Card className="">
                                                <CardHeader className="cardHeader">
                                                    <h3 className="spacer">
                                                        {project.name}
                                                    </h3>

                                                    <CardImg src={project.image}  />
                                                </CardHeader>
                                                
                                                <CardBody className="cardBg">
                                                    <p>
                                                        {`Project Stack: ${project.stack}`}
                                                    </p>
                                                    <p>
                                                        {
                                                            `Technologies Used: ${project.technologies}`
                                                        }
                                                    </p>
                                                    <p>
                                                        {
                                                            project.description
                                                        }
                                                    </p>
                                                    
                                                    <Row>
                                                        <Col>
                                                            <Button href={project.githubLink} className="buttons">
                                                                Link to Github
                                                            </Button>
                                                        </Col>
                                                        <Col>
                                                            <Button href={project.projectLink} className="buttons">
                                                                Link to Project
                                                            </Button>
                                                        </Col>
                                                        
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
