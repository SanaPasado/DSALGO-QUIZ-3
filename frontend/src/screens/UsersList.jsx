import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Container } from 'react-bootstrap'
import Layout from '../components/Layout'

function UsersList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const token = localStorage.getItem('access_token')
        const { data } = await axios.get('http://127.0.0.1:8000/api/users/', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        setUsers(data)
      } catch (error) {
        console.log('Error fetching users:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  if (loading) {
    return <Layout><div style={{ padding: '40px', textAlign: 'center' }}>Loading users...</div></Layout>
  }

  return (
    <Layout>
      <Container className="my-5">
        <h2 className="mb-4">Users List</h2>
        
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
                      window.location.href = `/user/${user.id}`
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
                <p>No users found</p>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </Layout>
  )
}

export default UsersList
