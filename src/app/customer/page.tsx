import { supabase } from '@/lib/supabase'

async function getProducts() {
  // Demo data jika supabase tidak tersedia
  const demoProducts = [
    {
      id: '1',
      name: 'Demo Burger',
      description: 'Delicious beef burger with fresh vegetables',
      price: 45000,
      image_url: null,
      category: 'main',
      is_available: true,
      created_at: new Date().toISOString()
    },
    {
      id: '2', 
      name: 'French Fries',
      description: 'Crispy golden fries',
      price: 20000,
      image_url: null,
      category: 'side',
      is_available: true,
      created_at: new Date().toISOString()
    }
  ]
  
  return demoProducts
}

export default async function CustomerPage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to AI Restaurant</h1>
          <p className="text-xl mb-8">Delicious food powered by artificial intelligence</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600">Freshly prepared with the finest ingredients</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">Rp {product.price.toLocaleString()}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export const dynamic = 'force-dynamic'
