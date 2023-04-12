import './navbar.css';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="n-logo">
        <h1>LOGO</h1>
      </div>
      <div className="n-links">
        <Link to='/'>Home</Link>
        <Link to='/about'>about us</Link>
        <Link to='/contact'>conract us</Link>
      </div>
      <div className="n-leftside">
        <button>Authenticate</button>
      </div>
    </div>
  )
}

export default Navbar