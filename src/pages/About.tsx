import React from 'react'

export default function About() {
  return (
    <section className="page about-page container">
      <h1>About The Shoe Parlor</h1>
      <p>
        The Shoe Parlor began with a single idea: great shoes should be comfortable,
        built to last, and accessible to everyone. We carefully curate brands and
        in-house designs that blend style and ergonomics.
      </p>

      <div className="cards">
        <div className="card">
          <h3>Our Mission</h3>
          <p>Make premium-feeling footwear that fits everyday life, sustainably.</p>
        </div>
        <div className="card">
          <h3>Quality</h3>
          <p>We test materials and partners to ensure durability and comfort.</p>
        </div>
        <div className="card">
          <h3>Community</h3>
          <p>Design feedback comes from real customers, not boardrooms.</p>
        </div>
      </div>
    </section>
  )
}
