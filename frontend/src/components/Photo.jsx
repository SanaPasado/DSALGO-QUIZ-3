import React from 'react'
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Photo({ photo }) {
  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: i < rating ? '#ffc107' : '#e4e4e4' }}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div style = {{ display: 'flex', justifyContent: 'center' }}>
      <Card className="my-3 p-3 rounded" style = {{ width: '80%', height: 'auto' }}>
        {photo.image && (
          <Link to={`/photo/${photo._id}`}>
            <Card.Img variant="top" src= {photo.image} alt={photo.name} style={{ width: '100%', height: 'auto' }} />
          </Link>
        )}
        
        <Card.Body>
          <Link to={`/photo/${photo._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card.Title as="h3">{photo.name}</Card.Title>
            <div className="product-meta">
              {photo.rating && renderStars(photo.rating)}
            </div>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Photo