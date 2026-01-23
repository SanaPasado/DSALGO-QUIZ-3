import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import products from '../stockphotos';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import Rating from '../components/Rating';
function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p._id === id);
  return (
    <Layout>
        <Header />
      <Row>
        <Col md={6} className="product-image-col">
            <Card className="my-3 p-3 rounded" style = {{ width: '100%', marginLeft:40, height: 'auto', border: 'none'}}>
            <Card.Img variant="top" src={product.image} alt={product.name} />
          
             </Card>    
      </Col>
      <Col md={4} className="product-info-col">
      <div style =  {{ textAlign: 'left', marginLeft: '20px'
      }}>
        <Card.Title as="h3" style={{ marginTop: '30px', fontFamily: 'Georgia, sans-serif', fontSize: "40px" }}>{product.name}</Card.Title>
         <Card.Text style = {{fontSize: '40px', fontFamily: 'Georgia, sans-serif'}}> {product.price} Php</Card.Text>
        <Card.Text style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: '16px', maxWidth: '600px' }}>
          {product.description}
        </Card.Text>
       
       <Row>
        
        <Card.Body>
            <div style = {{marginLeft: '8px', fontWeight: 'bold'}}> 
               <span style = {{marginRight: '75px', marginLeft: '8px'}}> Quantity*</span>
                <span> In Stock: {product.countInStock} </span>
                 </div>
            <div className="quantity-box">
            <button className="quantity-button"> - </button>
            <span className="quantity-number"> 1 </span>
            <button className="quantity-button"> + </button>
            </div>
            <button variant="primary" className="add-to-cart-button" style={{ marginLeft: '20px' }} disabled={product.countInStock === 0}>
                Add to Cart
            </button>
            
        </Card.Body>

       </Row>
       <Row>
        <div style = {{ marginTop: '40px', marginBottom: '20px' }}>
        <span style = {{margin: '0px 8px', fontWeight: 'bold', fontSize: '22px'}}> Rating: </span>
        <Rating value={product.rating} text = {`${product.numReviews} reviews`} color="#f8e825" />
        </div>
        </Row>
       </div> 
      </Col>
      
        <Col md={2} className="product-action-col">
        </Col>
      </Row>
        <Footer />
    </Layout>
  )
}

export default ProductDetail
