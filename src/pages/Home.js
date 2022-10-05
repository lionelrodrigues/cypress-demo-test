import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>WELCOME - Home Page</h1>

      <Link to='/login'> LOGIN </Link>
      <br />
      <Link to='/signup'> Signup </Link>
    </div>
  )
}

export default Home