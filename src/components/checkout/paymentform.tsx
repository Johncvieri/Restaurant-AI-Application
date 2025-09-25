"use client"
import { useState } from 'react'

export function PaymentForm() {
  const [customerData, setCustomerData] = useState({
    name: '', email: '', phone: '', address: ''
  })

  const handlePayment = async () => {
    // Midtrans snap token simulation
    const snapToken = 'mock-snap-token-' + Date.now()
    window.open(`https://app.sandbox.midtrans.com/snap/v2/vtweb/${snapToken}`, '_blank')
    
    // Simulate payment success
    setTimeout(() => {
      alert('Payment Successful! Order confirmed.')
    }, 3000)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Checkout</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
        <input type="tel" placeholder="Phone" className="w-full p-3 border rounded" />
        <textarea placeholder="Address" className="w-full p-3 border rounded" rows={3} />
        
        <button 
          type="button"
          onClick={handlePayment}
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
        >
          Pay with Midtrans
        </button>
      </form>
    </div>
  )
}
