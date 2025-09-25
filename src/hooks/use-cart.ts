"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types'

interface CartItem {
  product: Product
  quantity: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (product: Product) => {
        const { items } = get()
        const existingItem = items.find(item => item.product.id === product.id)
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({ items: [...items, { product, quantity: 1 }] })
        }
      },
      
      removeItem: (productId: string) => {
        const { items } = get()
        set({ items: items.filter(item => item.product.id !== productId) })
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        
        const { items } = get()
        set({
          items: items.map(item =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          )
        })
      },
      
      clearCart: () => set({ items: [] }),
      
      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),
      
      getTotalPrice: () => {
        const { items } = get()
        return items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
      },
      
      getTotalItems: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.quantity, 0)
      }
    }),
    {
      name: 'cart-storage'
    }
  )
)
