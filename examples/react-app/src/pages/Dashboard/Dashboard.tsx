import React from 'react'
import { Link } from 'react-router-dom'



const Dashboard = () => {

  return (
    <div style={{ display: 'block', width: '300px', margin: '100px auto' }}>
      <h1>Hello Guys</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/test">
        <button>Test Api Page</button>
      </Link>
    </div>
  )
}

export default Dashboard
