import type { Meta, StoryObj } from '@storybook/react';
import { ProductList } from './ProductList';
import type { Product } from './ProductList';

const meta: Meta<typeof ProductList> = {
  title: 'Organisms/ProductList',
  component: ProductList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
    category: 'Electronics',
    rating: 4.5,
    tags: ['wireless', 'noise-cancelling', 'premium'],
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Advanced smartwatch with health monitoring, GPS, and water resistance.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop',
    category: 'Electronics',
    rating: 4.8,
    tags: ['smartwatch', 'health', 'fitness'],
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe and auto-shutoff feature.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop',
    category: 'Kitchen',
    rating: 4.2,
    tags: ['coffee', 'kitchen', 'programmable'],
  },
  {
    id: '4',
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat made from eco-friendly materials with carrying strap.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=200&fit=crop',
    category: 'Fitness',
    rating: 4.6,
    tags: ['yoga', 'fitness', 'eco-friendly'],
  },
  {
    id: '5',
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop',
    category: 'Electronics',
    rating: 4.4,
    tags: ['bluetooth', 'portable', 'waterproof'],
  },
  {
    id: '6',
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and USB charging port.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
    category: 'Office',
    rating: 4.3,
    tags: ['LED', 'adjustable', 'USB'],
  },
];

export const Default: Story = {
  args: {
    products: sampleProducts,
  },
};

export const WithActions: Story = {
  args: {
    products: sampleProducts,
    onProductClick: (product) => alert(`Clicked on: ${product.name}`),
    onAddToCart: (product) => alert(`Added to cart: ${product.name}`),
    onFavorite: (product) => alert(`Favorited: ${product.name}`),
  },
};

export const WithoutActions: Story = {
  args: {
    products: sampleProducts,
    showAddToCart: false,
    showFavorite: false,
  },
};

export const Loading: Story = {
  args: {
    products: [],
    loading: true,
  },
};

export const Error: Story = {
  args: {
    products: [],
    error: 'Failed to load products. Please try again later.',
  },
};

export const Empty: Story = {
  args: {
    products: [],
  },
};

export const SingleProduct: Story = {
  args: {
    products: [sampleProducts[0]],
  },
};

export const TwoProducts: Story = {
  args: {
    products: sampleProducts.slice(0, 2),
  },
};

export const ElectronicsOnly: Story = {
  args: {
    products: sampleProducts.filter(p => p.category === 'Electronics'),
  },
};

export const HighRated: Story = {
  args: {
    products: sampleProducts.filter(p => (p.rating || 0) >= 4.5),
  },
};

export const Under100: Story = {
  args: {
    products: sampleProducts.filter(p => (p.price || 0) < 100),
  },
};

export const WithCustomHandlers: Story = {
  args: {
    products: sampleProducts,
    onProductClick: (product) => {
      console.log('Product clicked:', product);
      alert(`Viewing details for: ${product.name}`);
    },
    onAddToCart: (product) => {
      console.log('Adding to cart:', product);
      alert(`Added "${product.name}" to cart for $${product.price}`);
    },
    onFavorite: (product) => {
      console.log('Toggling favorite:', product);
      alert(`Toggled favorite for: ${product.name}`);
    },
  },
};
