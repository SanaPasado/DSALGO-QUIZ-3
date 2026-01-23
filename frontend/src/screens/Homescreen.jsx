import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col} from 'react-bootstrap'
import Photo from '../components/Photo'
import Banner from '../components/Banner'
import Layout from '../components/Layout'

function Homescreen() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    async function fetchPhotos() {
      const { data } = await axios.get('http://127.0.0.1:8000/api/stockphotos/')
      setPhotos(data)
    }
    fetchPhotos()
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