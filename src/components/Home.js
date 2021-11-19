import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import {projects} from './projects'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css';




const Home = () => {
    const Projects = useState(projects)
    
    
    
    
    return (
        <div className="bg">
            <Container className="bg spacer">
                <Row className="bg space-evenly">
                    <Col className="bg1 rounded " xs={12} lg={4}>
                        <h3 className=" spacer" >
                            Chauncey Plummer
                        </h3>
                        <h6 className="spacer">
                            Full Stack Web Developer
                        </h6>
                        <img />

                        <h6 className="spacer">
                            About Me
                        </h6>
                        <p>
                            
                        </p>
                        <h6 className="">
                            Languages I use
                        </h6>
                        <ul className="unstyle spacer ">
                            <li className="unstyle spacer ">HTML</li>
                            <li className="unstyle spacer ">CSS</li>
                            <li className="unstyle spacer ">JavaScript</li>
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
                                <Button href='https://twitter.com/chaveloper' className='buttons'  size="20em">
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
                    <Col className="bg1 rounded">
                        <h3 className="spacer">
                            My Projects
                        </h3>
                        <div className="col-10 justify-content-center mx-auto space-evenly rounded" md={8} xs={12}>
                            {
                                projects.map((project, index) => {
                                    return(
                                        <div className=""  key={index}>
                                            <Card className="rounded">
                                                <CardHeader className="cardHeader">
                                                    <h3>
                                                        {project.name}
                                                    </h3>
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
                                                    
                                                    <Row>
                                                        <Col>
                                                            <Button href={project.githubLink} className="buttons">
                                                                Link to Github
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
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
