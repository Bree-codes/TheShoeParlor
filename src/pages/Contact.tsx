import React, { useState } from 'react'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In a real app you'd POST to an API. We'll just show a success message.
    setSent(true)
  }

  return (
    <section className="page contact-page container">
      <h1>Contact Us</h1>
      <p>Questions about sizing, orders, or partnerships? Send us a message.</p>

      {sent ? (
        <div className="notice success">Thank you — we'll get back to you soon!</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={values.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={values.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} value={values.message} onChange={handleChange} required />
          </label>
          <div className="form-actions">
            <button className="btn primary" type="submit">Send Message</button>
          </div>
        </form>
      )}
    </section>
  )
}
