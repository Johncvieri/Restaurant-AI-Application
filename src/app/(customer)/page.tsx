import { ProductGrid } from "@/components/products/product-grid"
import { supabase } from "@/lib/supabase"

async function getProducts() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_available', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products:', error)
    return []
  }

  return products
}

export default async function HomePage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to AI Restaurant</h1>
          <p className="text-xl mb-8">Delicious food powered by artificial intelligence</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Order Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600">Freshly prepared with the finest ingredients</p>
        </div>
        
        <ProductGrid products={products} />
      </section>
    </div>
  )
}
