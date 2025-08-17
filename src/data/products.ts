import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Running Shoes',
    price: 99,
    image: '/images/running-shoes.jpg',
    category: 'clothing',
    description: 'Comfortable running shoes perfect for daily workouts and marathons.',
    rating: 4.5
  },
  {
    id: '2',
    title: 'Wireless Headphones',
    price: 299,
    image: '/images/headphones.jpg',
    category: 'electronics',
    description: 'High-quality wireless headphones with noise cancellation.',
    rating: 4.3
  },
  {
    id: '3',
    title: 'Backpack',
    price: 129,
    image: '/images/backpack.jpg',
    category: 'clothing',
    description: 'Durable backpack perfect for travel and everyday use.',
    rating: 4.7
  },
  {
    id: '4',
    title: 'Smartwatch',
    price: 249,
    image: '/images/smartwatch.jpg',
    category: 'electronics',
    description: 'Feature-rich smartwatch with fitness tracking and notifications.',
    rating: 4.2
  },
  {
    id: '5',
    title: 'Sunglasses',
    price: 149,
    image: '/images/sunglasses.jpg',
    category: 'clothing',
    description: 'Stylish sunglasses with UV protection.',
    rating: 4.1
  },
  {
    id: '6',
    title: 'Digital Camera',
    price: 499,
    image: '/images/camera.jpg',
    category: 'electronics',
    description: 'Professional digital camera with high resolution and advanced features.',
    rating: 4.6
  },
  {
    id: '7',
    title: 'T-shirt',
    price: 29,
    image: '/images/tshirt.jpg',
    category: 'clothing',
    description: 'Comfortable cotton t-shirt available in multiple colors.',
    rating: 4.0
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    image: '/images/smartphone.jpg',
    category: 'electronics',
    description: 'Latest smartphone with advanced camera and processing power.',
    rating: 4.4
  }
];

export const categories = ['all', 'electronics', 'clothing', 'home'] as const;
export type Category = typeof categories[number];
