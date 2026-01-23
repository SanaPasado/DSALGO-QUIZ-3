import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer'; 

function ServiceDetail() {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchService() {
            try {
                const { data } = await axios.get('http://127.0.0.1:8000/api/stockphotos/');
                const foundService = data.find((p) => p._id == id);
                if (foundService) {
                    setService(foundService);
                } else {
                    setError('Service not found');
                }
            } catch (err) {
                setError('Error fetching service');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchService();
    }, [id]);
    
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error || !service) {
      return <div>{error || 'Service not found'}</div>;
    }

    const renderStars = (rating) => {
      return (
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: i < rating ? '#ffc107' : '#e4e4e4', fontSize: '20px' }}>
              ★
            </span>
          ))}
        </div>
      );
    };

    return (
      <Layout>
        <Header />
        <Container style={{ marginTop: '40px', marginBottom: '60px' }}>
          <Row>
            <Col md={6} className="service-image-col">
              <Card className="my-3 p-3 rounded" style={{ width: '100%', height: 'auto', border: 'none' }}>
                <Card.Img variant="top" src={service.image} alt={service.name} />
              </Card>
            </Col>
            
            <Col md={6} className="service-info-col">
              <div style={{ textAlign: 'left' }}>
                {/* Service Name */}
                <Card.Title as="h2" style={{ marginTop: '20px', fontFamily: 'Georgia, sans-serif', fontSize: "36px", fontWeight: 'bold' }}>
                  {service.name}
                </Card.Title>

                {/* Rating */}
                <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                  <span style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '16px' }}>Rating:</span>
                  {renderStars(service.rating)}
                </div>

                {/* Price */}
                <Card.Text style={{ fontSize: '28px', fontFamily: 'Georgia, sans-serif', color: '#28a745', fontWeight: 'bold', marginTop: '15px' }}>
                  ₱ {service.price}
                </Card.Text>

                {/* Description */}
                <Card.Text style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif', fontSize: '16px', maxWidth: '100%', lineHeight: '1.6' }}>
                  {service.description}
                </Card.Text>

                {/* Service Details */}
                <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                  <Row style={{ marginBottom: '15px' }}>
                    <Col sm={6}>
                      <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Duration of Service:</span>
                      <p style={{ fontSize: '18px', marginTop: '5px' }}>{service.duration_of_service}</p>
                    </Col>
                    <Col sm={6}>
                      <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Expert Name:</span>
                      <p style={{ fontSize: '18px', marginTop: '5px' }}>{service.name_of_the_expert}</p>
                    </Col>
                  </Row>
                </div>

                {/* Book Now Button */}
                <Button 
                  variant="primary" 
                  style={{ 
                    marginTop: '30px', 
                    padding: '12px 40px', 
                    fontSize: '16px', 
                    fontWeight: 'bold',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '5px'
                  }}>
                  Book Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Layout>
    )
}

export default ServiceDetail
