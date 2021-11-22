import React from 'react'
import { Button, Col, Row } from 'reactstrap'

const NotFound = () => {
    return (
        <div className="lobby lobbySpacer">
            <div className="spacer">
                <Row className="spacer">
                    <h1>
                        Error #404
                    </h1>


                </Row >
                <Row className="spacer">
                    <h6>
                        The requested URL was not found on this server.
                    </h6>
                </Row>
                <Row>
                    <p className="text-center">
                        Click here to go back Home
                    </p>


                    <Col className="text-center">
                        <Button href="/home" className="buttons">
                            Home
                        </Button>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default NotFound
