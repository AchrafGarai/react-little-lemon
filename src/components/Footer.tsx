import React from 'react'

function Footer() {
  return (
    <footer>

        <ul className='flex'>
          <li><a href="/home">Home</a></li>        
          <li><a href="/blog">Reserve a table</a></li>
        </ul>

      <div>
         © 2023 Little lemon Inc. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer