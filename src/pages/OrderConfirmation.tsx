import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function OrderConfirmation() {
  const loc = useLocation()
  const state = (loc.state || {}) as { name?: string; total?: number }

  return (
    <section className="page container">
      <h1>Thank you{state.name ? `, ${state.name}` : ''}!</h1>
      <p>Your payment of ${state.total?.toFixed(2) ?? '0.00'} was successful (mock).</p>
      <p className="muted">We've sent a confirmation email (demo) and started processing your order.</p>
      <Link to="/" className="btn primary">Continue shopping</Link>
    </section>
  )
}
