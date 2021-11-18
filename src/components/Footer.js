import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Button, Col, Row } from 'reactstrap'

const Footer = (props) => {
    return (
        
            <div  className="bg">
                
                <Row className="bg spacer">
                    <h3>
                        Contact Me
                    </h3>
                    <a href="chaunceyplum@gmail.com" tooltip="chaunceyplum@gmail.com" 
                    className="unstyle">
                        Email me!
                    </a>


                </Row>
                
                
                <Row className="centerFooter justify-content-space-evenly spacer" >
                    
                    <Col className="d-flex justify-content-center spacer">
                        <Button href='https://www.instagram.com/chaveloper/' className='buttons' size="20em">
                            <FaInstagram />
                        </Button>
                    </Col>
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
            
            </div>
            
        
    )
}

export default Footer
