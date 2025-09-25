import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo-supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Demo data fallback
export const demoProducts = [
  {
    id: '1',
    name: 'Signature Burger',
    description: 'Juicy beef patty with fresh vegetables and special sauce',
    price: 45000,
    image_url: '/images/burger.jpg',
    category: 'main',
    is_available: true,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Truffle Fries',
    description: 'Crispy fries with truffle oil and parmesan',
    price: 25000,
    image_url: '/images/fries.jpg',
    category: 'side',
    is_available: true,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice',
    price: 18000,
    image_url: '/images/juice.jpg',
    category: 'beverage',
    is_available: true,
    created_at: new Date().toISOString()
  }
]
