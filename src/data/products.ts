type Product = {
  id: string
  name: string
  price: number
  image: string
  description?: string
}

const products: Product[] = [
  {
    id: 's1',
    name: 'Nimbus Runner',
    price: 129.0,
    image: '/images/product-1.webp',
    description: 'Lightweight runner with breathable mesh.'
  },
  {
    id: 's2',
    name: 'Court Classic',
    price: 89.0,
    image: '/images/product-2.webp',
    description: 'Timeless silhouette for everyday wear.'
  },
  {
    id: 's3',
    name: 'Trail Blazer',
    price: 149.0,
    image: '/images/product-3.webp',
    description: 'Durable outsole for off-road adventures.'
  },
  {
    id: 's4',
    name: 'City Slip-On',
    price: 74.0,
    image: '/images/product-4.webp',
    description: 'Easy on/off with cushioned footbed.'
  },
  {
    id: 's5',
    name: 'Retro High',
    price: 109.0,
    image: '/images/product-5.webp',
    description: 'Vintage-inspired high-top with modern comfort.'
  },
  {
    id: 's6',
    name: 'Everyday Slip',
    price: 59.0,
    image: '/images/product-6.webp',
    description: 'Affordable everyday go-to.'
  }
]

export default products
