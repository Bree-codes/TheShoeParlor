import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Featured from './pages/Featured'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStory from './pages/OurStory'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import FeaturedPreview from './components/FeaturedPreview'
import StoryPreview from './components/StoryPreview'
import Dashboard from './pages/Dashboard'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div className="app-root">
          <Header />
          <main>
            <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <section className="container">
                    <h2 className="section-title">Featured Shoes</h2>
                    <Featured />
                  </section>
                  {/* Previews to link out to full pages */}
                  <section className="container">
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',alignItems:'start'}}>
                      <FeaturedPreview />
                      <StoryPreview />
                    </div>
                  </section>
                </>
              }
            />
            <Route path="/featured" element={<Featured />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          </main>
          <Footer />
        </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
