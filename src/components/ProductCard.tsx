import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

type Product = {
  id: string
  name: string
  price: number
  image: string
  description?: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image })
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <article className="product-card">
      <div className="product-media">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-meta">
          <div className="price">${product.price.toFixed(2)}</div>
          <button className="btn small" onClick={handleAdd}>{added ? 'Added' : 'Add to Cart'}</button>
        </div>
      </div>
    </article>
  )
}
