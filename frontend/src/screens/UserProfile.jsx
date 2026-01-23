import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import './UserProfile.css'

function UserProfile() {
  const { userId } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem('access_token')
      const { data } = await axios.get(`http://127.0.0.1:8000/api/users/${userId}/`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      setUser(data)
    }
    fetchUser()
  }, [userId])

  if (!user) {
    return <Layout><div style={{ padding: '40px' }}>Loading...</div></Layout>
  }

  return (
    <Layout>
      <div className="profile-container">
        <Row>
          <Col md={8} lg={6} className="mx-auto">
            <div className="profile-card">
              <h3 className="profile-name">
                {user.name || user.username}
              </h3>
              <p className="profile-username">
                @{user.username}
              </p>

              <div className="profile-section">
                <p className="profile-label">
                  EMAIL
                </p>
                <p className="profile-value">
                  {user.email}
                </p>
              </div>

              <div className="profile-section">
                <p className="profile-label">
                  FULL NAME
                </p>
                <p className="profile-value">
                  {user.name || '—'}
                </p>
              </div>

              <div className="profile-section">
                <p className="profile-label">
                  ROLE
                </p>
                {user.isAdmin ? (
                  <span className="admin-badge">
                    Administrator
                  </span>
                ) : (
                  <span className="user-badge">
                    User
                  </span>
                )}
              </div>

              <a href="/users" className="back-button">
                ← Back to Users
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default UserProfile
