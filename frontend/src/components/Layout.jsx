import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

function Layout({children}) {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={1} className="bg-light sidebar"></Col>
        <Col md={10} className="main-content">{children}</Col>
        {/* kumabaga ung children represents the content of homescreen inside the layout component */}
        <Col md={1} className="bg-light sidebar"></Col>
      </Row>
    </Container>
  )
}

export default Layout
