import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Demo AI extraction
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const productData = {
      name: "AI Extracted Product",
      description: "This product was extracted using AI",
      price: 35000,
      category: "main"
    }

    return NextResponse.json(productData)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    )
  }
}
