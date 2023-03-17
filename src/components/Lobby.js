import React from 'react'
import { Button, Col, Row } from 'reactstrap'

const Lobby = () => {
  return (
    <div className='lobby lobbySpacer d-flex align-items-center justify-content-center bg'>
      <div className=' col col-10   bg'>
        <h3 className=' spacer'>Full Stack Developer</h3>
        <p className=' spacer'>
          Im Chauncey Plummer, An infectiously enthusiastic Front End Web
          Developent Bootcamp graduate with fundamental knowledge of web
          development. Seeking to utilize advanced expertise in javaScript
        </p>
        <Row>
          <Col />
          <Col className=''>
            <Button href='/home' className='btn btn-lg  buttons spacer mx-auto'>
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
