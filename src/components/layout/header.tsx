"use client"

import { ShoppingCart, User } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'

export function Header() {
  const { toggleCart, getTotalItems } = useCart()

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI Restaurant</h1>
              <p className="text-sm text-gray-600">Powered by Artificial Intelligence</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <a href="/customer" className="text-gray-700 hover:text-green-600 transition-colors">
              Menu
            </a>
            <a href="/admin" className="text-gray-700 hover:text-green-600 transition-colors">
              Admin
            </a>
            
            {/* Cart Button */}
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
