import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import Layout from '../components/Layout'
import { getServiceDetail } from '../actions/serviceActions'

function ServiceDetail() {
  const { pk } = useParams()
  const dispatch = useDispatch()
  const serviceDetail = useSelector(state => state.serviceDetail)
  const { loading, error, service } = serviceDetail

  useEffect(() => {
    dispatch(getServiceDetail(pk))
  }, [dispatch, pk])

  return (
    <Layout>
      {loading ? (
        <Container><p>Loading...</p></Container>
      ) : error ? (
        <Container><p>Error: {error}</p></Container>
      ) : (
        <Container className="py-5">
          <Row>
            <Col md={6}>
              <Card>
                <Card.Img variant="top" src={service.image} />
              </Card>
            </Col>
            <Col md={6}>
              <h2>{service.name}</h2>
              <Rating value={service.rating} />
              <h4 className="mt-3">${service.price}</h4>
              <p><strong>Duration:</strong> {service.duration_of_service}</p>
              <p><strong>Expert:</strong> {service.name_of_the_expert}</p>
              <p><strong>Description:</strong></p>
              <p>{service.description}</p>
              <Button variant="primary" size="lg">Book Now</Button>
            </Col>
          </Row>
        </Container>
      )}
    </Layout>
  )
}

export default ServiceDetail
