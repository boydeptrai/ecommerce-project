import Link from 'next/link';
import { urlFor } from '@component/lib/client';
import React from 'react'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="Headphones" className="hero-banner-image" />
      </div>
      <div>
        <Link href={`/product/`} >
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
