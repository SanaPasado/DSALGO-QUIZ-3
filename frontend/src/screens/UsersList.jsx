import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { listUsers } from '../actions/userActions'

function UsersList() {
  const dispatch = useDispatch()
  const userList = useSelector(state => state.userList)
  const { loading, users } = userList

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    dispatch(listUsers(token))
  }, [dispatch])

  if (loading) {
    return <Layout><div style={{ padding: '40px', textAlign: 'center' }}>Loading users...</div></Layout>
  }

  return (
    <Layout>
      <Container className="my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Users List</h2>
          <Link to="/register">
            <Button variant="primary">+ Create User</Button>
          </Link>
        </div>
        
        <Row>
          {users.length > 0 ? (
            users.map((user) => (
              <Col key={user.id} sm={12} md={6} lg={4} className="mb-4">
                <div className="user-card" style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  textAlign: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  height: '100%'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                onClick={() => window.location.href = `/user/${user.id}`}
                >
                  <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    {user.name || user.username}
                  </h5>
                  <p style={{ color: '#666', marginBottom: '8px' }}>
                    @{user.username}
                  </p>
                  <p style={{ color: '#999', fontSize: '14px' }}>
                    {user.email}
                  </p>
                  <button 
                    className="btn btn-sm btn-primary mt-3"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.location.href = `/users/${user.id}`
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <div style={{ textAlign: 'center', padding: '40px' }}>
                <p style={{ fontSize: '18px', marginBottom: '20px' }}>No users found</p>
                <Link to="/register">
                  <Button variant="primary">Create First User</Button>
                </Link>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </Layout>
  )
}

export default UsersList
