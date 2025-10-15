import type { Meta, StoryObj } from '@storybook/react';
import { ProductList } from './ProductList';
import type { Product } from './ProductList';
import mockData from './ProductList.mock.json';

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

const sampleProducts: Product[] = mockData.products;

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
