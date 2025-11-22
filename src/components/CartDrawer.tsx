import React, { useEffect, useRef } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function CartDrawer({ onClose }: { onClose?: () => void }) {
  const { items, removeItem, clear, totalCount, totalPrice } = useCart()
  const navigate = useNavigate()
  const ref = useRef<HTMLDivElement | null>(null)

  // Basic focus trap and Escape handling
  useEffect(() => {
    const el = ref.current
    const prevActive = document.activeElement as HTMLElement | null
    if (el) {
      const first = el.querySelector('button, a, input') as HTMLElement | null
      first?.focus()
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose?.()
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      prevActive?.focus()
    }
  }, [onClose])

  function handleCheckout() {
    onClose?.()
    navigate('/checkout')
  }

  return (
    <aside className="cart-drawer" role="dialog" aria-label="Shopping cart" ref={ref}>
      <div className="cart-header">
        <h3>Your Cart</h3>
        <div>{totalCount} items</div>
      </div>

      <div className="cart-body">
        {items.length === 0 ? (
          <div className="notice">Your cart is empty.</div>
        ) : (
          items.map((it) => (
            <div key={it.id} className="cart-item">
              <img src={it.image} alt={it.name} />
              <div className="meta">
                <div className="name">{it.name}</div>
                <div className="qty">Qty: {it.quantity}</div>
              </div>
              <div className="right">
                <div className="price">${(it.price * it.quantity).toFixed(2)}</div>
                <button className="btn small" onClick={() => removeItem(it.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <div className="total">Total: ${totalPrice.toFixed(2)}</div>
        <div className="actions">
          <button className="btn" onClick={clear}>Clear</button>
          <button className="btn primary" disabled={items.length === 0} onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </aside>
  )
}
