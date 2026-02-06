import React from 'react'

function Rating({ value, color = '#ffc107' }) {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: i < value ? color : '#e4e4e4' }}>
          ★
        </span>
      ))}
    </div>
  )
}

export default Rating
