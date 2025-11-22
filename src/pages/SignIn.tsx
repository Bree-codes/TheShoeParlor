import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function SignIn() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [values, setValues] = useState({ email: '', password: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Very basic demo login: create a user object from email
    const name = values.email.split('@')[0] || 'Customer'
    login({ name, email: values.email })
    navigate('/')
  }

  return (
    <section className="page auth-page container">
      <h1>Sign In</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" value={values.email} onChange={handleChange} required />
        </label>
        <label>
          Password
          <input name="password" type="password" value={values.password} onChange={handleChange} required />
        </label>
        <div className="form-actions">
          <button className="btn primary" type="submit">Sign In</button>
          <Link to="/signup" className="btn ghost" style={{ marginLeft: '0.5rem' }}>Create account</Link>
        </div>
      </form>
    </section>
  )
}
