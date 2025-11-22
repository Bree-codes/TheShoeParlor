import React from 'react'

export default function OurStory() {
  return (
    <section className="page story-page container">
      <h1>Our Story</h1>
      <p>
        Founded in 2018, The Shoe Parlor started as a weekend market stall and grew into a
        community of designers and customers who love footwear. Our designs are inspired
        by city life, travel, and comfort-first engineering.
      </p>

      <div className="timeline">
        <div className="event">
          <div className="year">2018</div>
          <div className="desc">First collection launched at local market.</div>
        </div>
        <div className="event">
          <div className="year">2020</div>
          <div className="desc">Expanded online with sustainable material partners.</div>
        </div>
        <div className="event">
          <div className="year">2023</div>
          <div className="desc">Opened our flagship showroom and in-house design lab.</div>
        </div>
      </div>
    </section>
  )
}
