import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { items, totalPrice, clear } = useCart()
  const navigate = useNavigate()
  const [values, setValues] = useState({ name: '', address: '', city: '', email: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function handlePay(e: React.FormEvent) {
    e.preventDefault()
    // Mock payment: clear cart and navigate to confirmation
    clear()
    navigate('/order-confirmation', { state: { name: values.name, total: totalPrice } })
  }

  return (
    <section className="page checkout-page container">
      <h1>Checkout</h1>
      {items.length === 0 ? (
        <p className="muted">Your cart is empty.</p>
      ) : (
        <div className="grid-2">
          <form className="contact-form" onSubmit={handlePay}>
            <label>
              Full name
              <input name="name" required value={values.name} onChange={handleChange} />
            </label>
            <label>
              Email
              <input name="email" type="email" required value={values.email} onChange={handleChange} />
            </label>
            <label>
              Address
              <input name="address" required value={values.address} onChange={handleChange} />
            </label>
            <label>
              City
              <input name="city" required value={values.city} onChange={handleChange} />
            </label>
            <div className="form-actions">
              <button className="btn primary" type="submit">Pay ${totalPrice.toFixed(2)}</button>
            </div>
          </form>

          <div>
            <h3>Order Summary</h3>
            <div className="card">
              {items.map((it) => (
                <div key={it.id} style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
                  <div>{it.name} x{it.quantity}</div>
                  <div>${(it.price * it.quantity).toFixed(2)}</div>
                </div>
              ))}
              <hr />
              <div style={{display:'flex',justifyContent:'space-between',fontWeight:700}}>Total <div>${totalPrice.toFixed(2)}</div></div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
