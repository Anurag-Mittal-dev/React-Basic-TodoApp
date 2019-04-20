import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </div>
  )
}

const headerStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
}

export default Header;