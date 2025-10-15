import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    showSearch: {
      control: { type: 'boolean' },
    },
    onSearch: { action: 'searched' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Product Training',
  },
};

export const WithNavigation: Story = {
  args: {
    title: 'Product Training',
    navigationItems: [
      { label: 'Home', href: '/', active: true },
      { label: 'Products', href: '/products' },
      { label: 'Training', href: '/training' },
      { label: 'About', href: '/about' },
    ],
  },
};

export const WithSearch: Story = {
  args: {
    title: 'Product Training',
    showSearch: true,
    onSearch: (query: string) => {
      console.log('Searching for:', query);
      alert(`Searching for: ${query}`);
    },
    navigationItems: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Training', href: '/training' },
    ],
  },
};

export const WithCustomUserMenu: Story = {
  args: {
    title: 'Product Training',
    navigationItems: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Training', href: '/training' },
    ],
    userMenu: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="ghost" size="sm">
          <Icon name="user" size="sm" />
        </Button>
        <Button variant="outline" size="sm">
          Sign Out
        </Button>
      </div>
    ),
  },
};

export const WithCustomLogo: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#3b82f6',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold'
        }}>
          PT
        </div>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Product Training</span>
      </div>
    ),
    navigationItems: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Training', href: '/training' },
    ],
  },
};

export const Minimal: Story = {
  args: {
    title: 'Minimal Header',
    showSearch: false,
    navigationItems: [],
  },
};

export const ECommerce: Story = {
  args: {
    title: 'ShopHub',
    showSearch: true,
    onSearch: (query: string) => alert(`Searching products: ${query}`),
    navigationItems: [
      { label: 'Home', href: '/' },
      { label: 'Categories', href: '/categories' },
      { label: 'Deals', href: '/deals' },
      { label: 'Brands', href: '/brands' },
    ],
    userMenu: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="ghost" size="sm">
          <Icon name="heart" size="sm" />
        </Button>
        <Button variant="ghost" size="sm">
          <Icon name="user" size="sm" />
        </Button>
      </div>
    ),
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    title: 'Product Training',
    showSearch: true,
    navigationItems: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Training', href: '/training' },
      { label: 'About', href: '/about' },
    ],
  },
};
