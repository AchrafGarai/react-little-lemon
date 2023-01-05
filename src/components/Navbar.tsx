import React from 'react'

function Navbar() {
  return (
    <nav>
      <img src="./little-lemon-logo.png" width={200} alt="Little Lemon Logo" />
      <ul>
        <li><a href="/home">Home</a></li>        
        <li><a href="/blog">Reserve a table</a></li>
      </ul>
    </nav>
  )
}

export default Navbar