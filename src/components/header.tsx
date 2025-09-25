"use client"
import { ShoppingCart, User } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">AI Restaurant</h1>
          </div>
          
          <nav className="flex items-center space-x-6">
            <a href="/customer" className="text-gray-700 hover:text-blue-600">Menu</a>
            <a href="/admin" className="text-gray-700 hover:text-blue-600">Admin</a>
            <button className="relative p-2">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
