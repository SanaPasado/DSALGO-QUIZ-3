import React, { useState, useEffect } from 'react'
import { Row, Col} from 'react-bootstrap'
import Photo from '../components/Photo'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import stockphotos from '../stockphotos'

function Homescreen() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    setPhotos(stockphotos)
  }, [])

  return (
    <Layout>

      

      <div className='banner-container'>
        <Banner />
      </div>

      <Row>
        {photos.map((photo) => (
          <Col key={photo._id} sm={12} md={6} lg={6} xl={6}>
            <Photo photo={photo} />
          </Col>
        ))}
      </Row>

    </Layout>
  )
}

export default Homescreen