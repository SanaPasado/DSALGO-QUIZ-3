import React from 'react'
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Rating from './Rating';

function Product({ product }) {
  return (
    <div style = {{ display: 'flex', justifyContent: 'center' }}>
      <Card className="my-3 p-3 rounded" style = {{ width: '80%', height: 'auto' }}>
        {product.image && (
          <Link to={`/product/${product._id}`}>
            <Card.Img variant="top" src= {product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
          </Link>
        )}
        
        <Card.Body>
          <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card.Title as="h3">{product.name}</Card.Title>
            <div className="product-meta">
              <Card.Text className="product-price">{product.price} Php</Card.Text>
              <div className="ratingf">
                <Rating value={product.rating} text={`${product.numReviews} reviews`} color="#f8e825" />
              </div>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product