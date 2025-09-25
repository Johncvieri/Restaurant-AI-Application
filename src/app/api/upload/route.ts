import { NextRequest, NextResponse } from 'next/server'
import { aiExtractor } from '@/lib/ai-product-extractor'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('image') as File

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Extract product info using AI
    const productData = await aiExtractor.extractFromImage(buffer)

    return NextResponse.json(productData)
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    )
  }
}
