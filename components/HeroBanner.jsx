import Link from 'next/link'
import React from 'react'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className="beats-solo"></p>
        <h3>MIX TEXT</h3>
        <h1></h1>
        <img src="" alt="Headphones" className="hero-banner-image" />
      </div>
      <div>
        <Link href={`/product/${heroBanner.product}`} >
          <button type='button'>BUTTON TEXT</button>
        </Link>
      </div>
      <div className="desc">
        <h5>Description</h5>
        <p></p>
      </div>
    </div>
  )
}

export default HeroBanner
