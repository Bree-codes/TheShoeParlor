import React from 'react'
import { Link } from 'react-router-dom'

export default function StoryPreview() {
  return (
    <section className="story-preview container">
      <div className="story-inner">
        <div className="story-copy">
          <h2>Our Story</h2>
          <p>From market stall to a community-driven studio — learn how we craft timeless footwear.</p>
          <Link to="/our-story" className="btn primary">Read The Story</Link>
        </div>
        <div className="story-image">
          <img src="/images/story-bg.webp" alt="Our story" />
        </div>
      </div>
    </section>
  )
}
