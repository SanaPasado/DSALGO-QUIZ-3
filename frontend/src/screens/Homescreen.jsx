import React from 'react'
import products from '../stockphotos'
import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Banner from '../components/Banner'
import Layout from '../components/Layout'

function Homescreen() {
  return (
    <Layout>

      

      <div className='banner-container'>
        <Banner />
      </div>

      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={6} xl={6}>
            <Product product={product} />
          </Col>
        ))}
      </Row>

    </Layout>
  )
}

export default Homescreen