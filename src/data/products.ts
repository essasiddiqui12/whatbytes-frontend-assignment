import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Running Shoes',
    price: 99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center',
    category: 'clothing',
    description: 'Comfortable running shoes perfect for daily workouts and marathons.',
    rating: 4.5
  },
  {
    id: '2',
    title: 'Wireless Headphones',
    price: 299,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center',
    category: 'electronics',
    description: 'High-quality wireless headphones with noise cancellation.',
    rating: 4.3
  },
  {
    id: '3',
    title: 'Backpack',
    price: 129,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
    category: 'clothing',
    description: 'Durable backpack perfect for travel and everyday use.',
    rating: 4.7
  },
  {
    id: '4',
    title: 'Smartwatch',
    price: 249,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center',
    category: 'electronics',
    description: 'Feature-rich smartwatch with fitness tracking and notifications.',
    rating: 4.2
  },
  {
    id: '5',
    title: 'Sunglasses',
    price: 149,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center',
    category: 'clothing',
    description: 'Stylish sunglasses with UV protection.',
    rating: 4.1
  },
  {
    id: '6',
    title: 'Digital Camera',
    price: 499,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop&crop=center',
    category: 'electronics',
    description: 'Professional digital camera with high resolution and advanced features.',
    rating: 4.6
  },
  {
    id: '7',
    title: 'T-shirt',
    price: 29,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center',
    category: 'clothing',
    description: 'Comfortable cotton t-shirt available in multiple colors.',
    rating: 4.0
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center',
    category: 'electronics',
    description: 'Latest smartphone with advanced camera and processing power.',
    rating: 4.4
  }
];

export const categories = ['all', 'electronics', 'clothing', 'home'] as const;
export type Category = typeof categories[number];
