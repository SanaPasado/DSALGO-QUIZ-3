import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Service from '../components/Service'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import { listServices } from '../actions/serviceActions'

function Homescreen() {
  const dispatch = useDispatch()
  const serviceList = useSelector(state => state.serviceList)
  const { loading, error, services } = serviceList

  useEffect(() => {
    dispatch(listServices())
  }, [dispatch])

  return (
    <Layout>
      <div className='banner-container'>
        <Banner />
      </div>
   
      {loading ? <p>Loading...</p>
        : error ? <p>Error: {error}</p>
          : <Row>
            {services.map((service) => (
              <Col key={service.id} sm={12} md={6} lg={6} xl={6}>
                <Service service={service} />
              </Col>
            ))}
          </Row>
      }

    </Layout>
  )
}

export default Homescreen