import { NextResponse } from 'next/server'

// Demo data
const demoProducts = [
  {
    id: '1',
    name: 'Demo Burger',
    description: 'Delicious beef burger',
    price: 45000,
    image_url: null,
    category: 'main',
    is_available: true,
    created_at: new Date().toISOString()
  }
]

export async function GET() {
  return NextResponse.json(demoProducts)
}

export async function POST(request: Request) {
  try {
    const productData = await request.json()
    const newProduct = {
      id: Math.random().toString(36).substr(2, 9),
      ...productData,
      created_at: new Date().toISOString()
    }
    return NextResponse.json(newProduct)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
