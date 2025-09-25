'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('admin-authenticated')
    if (!isAuthenticated) {
      router.push('/admin/login')
    }
  }, [router])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Welcome to the admin panel</p>
    </div>
  )
}
