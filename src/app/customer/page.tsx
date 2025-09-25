import { Header } from '@/components/layout/Header'
import { CartSidebar } from '@/components/cart/CartSidebar'
import { ProductGrid } from '@/components/products/ProductGrid'
import { supabase, demoProducts } from '@/lib/supabase'

async function getProducts() {
  try {
    // Try to get from Supabase
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_available', true)
      .order('created_at', { ascending: false })

    if (error || !products || products.length === 0) {
      return demoProducts // Fallback to demo data
    }

    return products
  } catch (error) {
    return demoProducts // Fallback to demo data
  }
}

export default async function CustomerPage() {
  const products = await getProducts()

  return (
    <>
      <Header />
      <CartSidebar />
      
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to AI Restaurant</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the future of dining with AI-powered culinary excellence. 
            Fresh ingredients, innovative recipes, unforgettable flavors.
          </p>
          <div className="space-x-4">
            <button className="btn-primary text-lg px-8 py-3">
              Order Now
            </button>
            <button className="bg-white text-green-600 font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Powered</h3>
              <p className="text-gray-600">Smart menu recommendations powered by artificial intelligence</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍕</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">Daily fresh ingredients sourced from local suppliers</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">30-minute delivery guarantee or your money back</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Signature Menu</h2>
            <p className="text-gray-600 text-lg">Curated by AI, perfected by chefs</p>
          </div>
          
          <ProductGrid products={products} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">AI Restaurant</h3>
          <p className="text-gray-400 mb-6">Revolutionizing dining with artificial intelligence</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
          </div>
          <p className="text-gray-500 mt-8">&copy; 2024 AI Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
