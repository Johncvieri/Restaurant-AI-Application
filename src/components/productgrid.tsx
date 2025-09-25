"use client"
import { ProductCard } from './ProductCard'
import { db } from '@/lib/database'

export function ProductGrid() {
  const products = db.products.find()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
