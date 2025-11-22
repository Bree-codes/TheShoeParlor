import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function SignUp() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [values, setValues] = useState({ name: '', email: '', password: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Demo signup: store user via login
    login({ name: values.name || values.email.split('@')[0], email: values.email })
    navigate('/')
  }

  return (
    <section className="page auth-page container">
      <h1>Create account</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Full name
          <input name="name" value={values.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={values.email} onChange={handleChange} required />
        </label>
        <label>
          Password
          <input name="password" type="password" value={values.password} onChange={handleChange} required />
        </label>
        <div className="form-actions">
          <button className="btn primary" type="submit">Create account</button>
          <Link to="/signin" className="btn ghost" style={{ marginLeft: '0.5rem' }}>Sign in</Link>
        </div>
      </form>
    </section>
  )
}
