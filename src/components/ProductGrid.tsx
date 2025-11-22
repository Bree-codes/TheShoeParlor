import React from 'react'
import products from '../data/products'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  return (
    <div className="product-grid" id="featured">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
