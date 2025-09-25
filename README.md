# Restaurant AI Demo App

A modern restaurant landing page with AI-powered product extraction.

## Features

- 🍕 Product menu display with add to cart
- 🤖 AI product extraction from images
- 💳 Midtrans payment integration
- 👨‍💼 Admin panel for product management
- 📱 Responsive design

## Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **AI:** Google Gemini API, LangChain
- **Payment:** Midtrans
- **Deployment:** Vercel / Netlify

## Quick Start

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.local.example`)
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Demo Credentials

**Admin Panel:**
- URL: `/admin`
- Email: `admin@demo.com`
- Password: `admin123`

**Payment Test:**
- Use Midtrans sandbox credentials
- Test card: 4811 1111 1111 1114

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create new product
- `POST /api/upload` - Upload and process product image
- `POST /api/orders` - Create new order
- `POST /api/webhooks/midtrans` - Payment webhook

## n8n Workflows

The project includes n8n workflows for:
- Product image processing and AI extraction
- Payment notification handling

See `n8n-workflows/` directory for workflow configurations.
