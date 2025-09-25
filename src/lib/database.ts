// Simulate Supabase database
let products = [
  {
    id: '1', 
    name: 'AI Generated Burger',
    description: 'Created with artificial intelligence',
    price: 45000,
    image_url: '/api/placeholder/300/200',
    category: 'main',
    is_available: true,
    created_at: new Date().toISOString()
  }
]

export const db = {
  products: {
    find: () => products,
    add: (product: any) => {
      const newProduct = { ...product, id: Date.now().toString() }
      products.push(newProduct)
      return newProduct
    }
  }
}
