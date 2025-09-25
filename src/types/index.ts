export interface Product {
  id: string
  name: string
  description: string | null
  price: number
  image_url: string | null
  category: string
  is_available: boolean
  created_at: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  customer_name: string
  customer_email: string | null
  customer_phone: string | null
  total_amount: number
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled'
  payment_status: 'pending' | 'paid' | 'failed' | 'expired'
  midtrans_order_id: string | null
  created_at: string
  order_items: OrderItem[]
}

export interface OrderItem {
  id: string
  product_id: string
  product: Product
  quantity: number
  price: number
}

export interface OrderCreateData {
  customer_name: string
  customer_email?: string
  customer_phone?: string
  items: Array<{
    product_id: string
    quantity: number
    price: number
  }>
}

export interface AIProductData {
  name: string
  description: string
  price: number
  category?: string
}
