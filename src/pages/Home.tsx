import React from 'react'
import { Specials } from '../components'
function Home() {
  return (
    <>
      <section className='hero-section'>
        <div className='two-col-grid'>
            <div>
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>We are a family owned Meditarranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <button>Make a reservation</button>
            </div>
            <img  className='hero-section-image' width={1024} src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        </div>
      </section>
      <section>
          <Specials/>
      </section>
    </>

  )
}

export default Home