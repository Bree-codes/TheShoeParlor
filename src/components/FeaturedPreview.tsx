import React from 'react'
import products from '../data/products'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

export default function FeaturedPreview() {
  const preview = products.slice(0, 3)
  return (
    <section className="featured-preview container">
      <div className="preview-header">
        <h2>Featured Picks</h2>
        <Link to="/featured" className="btn ghost">View All</Link>
      </div>
      <div className="product-grid">
        {preview.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
