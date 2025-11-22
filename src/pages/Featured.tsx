import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Featured() {
  return (
    <section className="page featured-page container">
      <h1>Featured Collection</h1>
      <p>Hand-picked favorites and new arrivals.</p>

      <div className="product-grid featured-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
