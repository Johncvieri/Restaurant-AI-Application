import { redirect } from 'next/navigation'

export default function HomePage() {
  redirect('/customer')
}

export const dynamic = 'force-dynamic'
