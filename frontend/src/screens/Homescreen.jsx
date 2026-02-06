import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col} from 'react-bootstrap'
import Service from '../components/Service'
import Banner from '../components/Banner'
import Layout from '../components/Layout'

function Homescreen() {
  const [services, setServices] = useState([])

  useEffect(() => {
    async function fetchServices() {
      const { data } = await axios.get('http://127.0.0.1:8000/api/services')
      setServices(data)
    }
    fetchServices()
  }, [])

  return (
    <Layout>
      <div className='banner-container'>
        <Banner />
      </div>
   

      <Row>
        {services.map((service) => (
          <Col key={service.id} sm={12} md={6} lg={6} xl={6}>
            <Service service={service} />
          </Col>
        ))}
      </Row>

    </Layout>
  )
}

export default Homescreen