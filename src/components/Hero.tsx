import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Step Into Comfort & Style</h1>
          <p>Discover curated sneakers and footwear crafted for comfort, fashion, and lasting quality.</p>
          <div className="hero-cta">
            <Link className="btn primary" to="/featured">Shop Featured</Link>
            <Link className="btn ghost" to="/our-story">Our Story</Link>
          </div>
        </div>
        <div className="hero-image" aria-hidden>
          <img src="/images/hero.webp" alt="Stylish shoes" />
        </div>
      </div>
    </section>
  )
}
