import React from 'react'
import { Button, Col, Row } from 'reactstrap'

const Lobby = () => {
    return (
        <div className="lobby lobbySpacer d-flex align-items-center justify-content-center">
            <div className=" col col-10 align-items-center justify-content-center">
                <h3 className="text-center spacer">
                    Hey! I'm Chauncey. 
                </h3>
                <p className="text-center spacer">
                An infectiously enthusiastic Front End Web Developent Bootcamp graduate with fundamental knowledge of web development. Seeking to utilize advanced expertise in javaScript
                </p> 
                <Row>
                    <Col />
                    <Col className="text-center">
                        <Button href="/home" className="btn btn-lg  buttons spacer mx-auto">
                            Learn More
                        </Button>
                    </Col>
                    <Col />
                </Row>
            </div>
        </div>
    )
}

export default Lobby
