import React from 'react'
import Layout from '../components/Layout'
import { Form, Button } from 'react-bootstrap'

function Contact() {
  return (
    <Layout>
      <div className="whitebox" style={{ marginTop: 20 }}>
        <h1>Contact Us</h1>
        <p>If you have questions, drop us a message — we usually reply within a day.</p>

        <Form>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>

          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="you@example.com" />
          </Form.Group>

          <Form.Group controlId="message" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Tell us what you'd like" />
          </Form.Group>

          <Button variant="primary" type="submit">Send Message</Button>
        </Form>
      </div>
    </Layout>
  )
}

export default Contact