import React from 'react'

function Navbar() {
  return (
    <nav>
      <img src="./little-lemon-logo.jpg" width={200} alt="Little Lemon Logo" />
      <ul>
        <li><a href="/home">Homepage</a></li>        
        <li><a href="/about">About Us</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/blog">Reserve a table</a></li>
      </ul>
    </nav>
  )
}

export default Navbar