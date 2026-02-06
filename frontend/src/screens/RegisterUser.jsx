import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../actions/userActions'
import { USER_REGISTER_RESET } from '../constants/userConstants'

function RegisterUser() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [validationError, setValidationError] = useState('')
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, success } = userRegister

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        dispatch({ type: USER_REGISTER_RESET })
        navigate('/users')
      }, 1500)
    }
  }, [success, navigate, dispatch])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setValidationError('')

    if (!formData.username || !formData.email || !formData.password) {
      setValidationError('All fields are required')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setValidationError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setValidationError('Password must be at least 6 characters')
      return
    }

    dispatch(registerUser({
      username: formData.username,
      email: formData.email,
      password: formData.password
    }))
  }

  return (
    <Layout>
      <Container className="py-5">
        <div className="mx-auto" style={{ maxWidth: '500px' }}>
          <h2 className="mb-4">Create Account</h2>
          
          {validationError && <Alert variant="danger">{validationError}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">User created! Redirecting...</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />
            </Form.Group>
 disabled={loading}>
              {loading ? 'Creating...' : 'Create User'}nt="primary" type="submit" className="w-100">
              Create User
            </Button>
          </Form>
        </div>
      </Container>
    </Layout>
  )
}

export default RegisterUser
