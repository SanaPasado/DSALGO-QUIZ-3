import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import  Rating  from './Rating'

export function Service({service}) {
  return (
    <Card className="h-100">
      <Link to="/">
        <Card.Img variant="top" src={service.image} />
      </Link>

      {/* used seRialiezr for service.image to return absolute url to frontend */}
      {/* backend\base\serializers.py */}
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
      </Card.Body>

      <Card.Footer>
        <Rating value={service.rating} />
      </Card.Footer>
    </Card>
  )
}

export default Service