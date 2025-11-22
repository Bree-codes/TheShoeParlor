import React, { createContext, useContext, useEffect, useState } from 'react'

type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>, qty?: number) => void
  removeItem: (id: string) => void
  clear: () => void
  totalCount: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem('sp_cart')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('sp_cart', JSON.stringify(items))
  }, [items])

  function addItem(item: Omit<CartItem, 'quantity'>, qty = 1) {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id)
      if (idx >= 0) {
        const copy = [...prev]
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + qty }
        return copy
      }
      return [...prev, { ...item, quantity: qty }]
    })
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((p) => p.id !== id))
  }

  function clear() {
    setItems([])
  }

  const totalCount = items.reduce((s, i) => s + i.quantity, 0)
  const totalPrice = items.reduce((s, i) => s + i.quantity * i.price, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
