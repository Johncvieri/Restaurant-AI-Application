"use client"
import { useState } from 'react'

export default function UploadPage() {
  const [preview, setPreview] = useState('')
  const [extractedData, setExtractedData] = useState(null)
  const [loading, setLoading] = useState(false)

  const simulateAIExtraction = (file: File) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: `AI Generated ${file.name.split('.')[0]}`,
          description: `Delicious ${file.name.split('.')[0]} created with AI`,
          price: Math.floor(Math.random() * 50000) + 10000,
          category: ['main', 'side', 'beverage'][Math.floor(Math.random() * 3)]
        })
      }, 2000)
    })
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setLoading(true)
    const reader = new FileReader()
    reader.onload = (e) => setPreview(e.target?.result as string)
    reader.readAsDataURL(file)

    // Simulate AI processing
    const result = await simulateAIExtraction(file)
    setExtractedData(result)
    setLoading(false)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">AI Product Upload</h1>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <input type="file" accept="image/*" onChange={handleUpload} className="hidden" id="upload" />
        <label htmlFor="upload" className="cursor-pointer">
          {preview ? (
            <img src={preview} alt="Preview" className="max-w-full h-64 object-cover mx-auto rounded" />
          ) : (
            <div className="py-12">
              <div className="text-4xl mb-4">📸</div>
              <p className="text-gray-600">Click to upload product photo</p>
              <p className="text-sm text-gray-500">AI will extract name, description, and price</p>
            </div>
          )}
        </label>
      </div>

      {loading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto"></div>
          <p>AI is analyzing your image...</p>
        </div>
      )}

      {extractedData && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <h3 className="font-bold mb-2">AI Extraction Result:</h3>
          <pre className="text-sm">{JSON.stringify(extractedData, null, 2)}</pre>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Save Product
          </button>
        </div>
      )}
    </div>
  )
}
