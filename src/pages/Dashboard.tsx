import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

export default function Dashboard() {
  const { user } = useAuth()
  const { items, totalCount, totalPrice } = useCart()

  return (
    <section className="page dashboard-page container">
      <h1>Account</h1>
      <div className="grid-2">
        <div className="card">
          <h3>Profile</h3>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>

        <div className="card">
          <h3>Your Cart</h3>
          <p>{totalCount} items — <strong>${totalPrice.toFixed(2)}</strong></p>
        </div>
      </div>

      <div style={{marginTop:16}}>
        <h2>Recent Orders</h2>
        <p className="muted">No orders yet — your orders will appear here after checkout.</p>
      </div>
    </section>
  )
}
