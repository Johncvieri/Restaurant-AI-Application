"use client"

import { Product } from '@/types'
import { useCart } from '@/hooks/use-cart'
import { ShoppingCart, Star } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product)
  }

  return (
    <div className="food-card bg-white rounded-xl overflow-hidden shadow-lg">
      {/* Product Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-gray-400">
              <span className="text-4xl mb-2 block">🍽️</span>
              <span className="text-sm">No image available</span>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full capitalize">
            {product.category}
          </span>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
          <Star size={12} fill="currentColor" />
          <span>4.8</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-xl text-green-600">
              Rp {product.price.toLocaleString()}
            </span>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="btn-primary flex items-center space-x-2 text-sm"
          >
            <ShoppingCart size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  )
        }
