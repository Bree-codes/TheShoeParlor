import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { totalCount } = useCart()
  const [open, setOpen] = useState(false)

  function handleSignOut() {
    logout()
    navigate('/')
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">The Shoe Parlor</Link>
        <nav className="nav">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/featured" className={({isActive}) => isActive ? 'active' : ''}>Featured</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/our-story" className={({isActive}) => isActive ? 'active' : ''}>Our Story</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>
        <div className="actions">
          <button className="btn" onClick={() => setOpen(true)} aria-label="Open cart">Cart ({totalCount})</button>
          {user ? (
            <div className="account">
              <Link to="/dashboard" style={{ color: 'var(--brand)', fontWeight: 600, marginRight: 8 }}>Hi, {user.name}</Link>
              <button className="btn" onClick={handleSignOut}>Sign Out</button>
            </div>
          ) : (
            <Link to="/signin" className="btn">Sign In</Link>
          )}
        </div>
      </div>
      {open && <div className="cart-overlay" onClick={() => setOpen(false)} />}
      {open && <CartDrawer onClose={() => setOpen(false)} />}
    </header>
  )
}
