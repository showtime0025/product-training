import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    companyName: 'Product Training',
  },
};

export const WithLinks: Story = {
  args: {
    companyName: 'Product Training',
    links: [
      {
        title: 'Product',
        items: [
          { label: 'Features', href: '/features' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Documentation', href: '/docs' },
          { label: 'API Reference', href: '/api' },
        ],
      },
      {
        title: 'Company',
        items: [
          { label: 'About Us', href: '/about' },
          { label: 'Careers', href: '/careers' },
          { label: 'Contact', href: '/contact' },
          { label: 'Press', href: '/press' },
        ],
      },
      {
        title: 'Support',
        items: [
          { label: 'Help Center', href: '/help' },
          { label: 'Community', href: '/community' },
          { label: 'Status', href: '/status' },
          { label: 'Security', href: '/security' },
        ],
      },
    ],
  },
};

export const WithSocialLinks: Story = {
  args: {
    companyName: 'Product Training',
    socialLinks: [
      { name: 'Twitter', href: 'https://twitter.com', icon: 'user' },
      { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'user' },
      { name: 'GitHub', href: 'https://github.com', icon: 'user' },
      { name: 'YouTube', href: 'https://youtube.com', icon: 'user' },
    ],
    links: [
      {
        title: 'Product',
        items: [
          { label: 'Features', href: '/features' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Documentation', href: '/docs' },
        ],
      },
      {
        title: 'Company',
        items: [
          { label: 'About Us', href: '/about' },
          { label: 'Careers', href: '/careers' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
  },
};

export const ECommerce: Story = {
  args: {
    companyName: 'ShopHub',
    links: [
      {
        title: 'Shop',
        items: [
          { label: 'All Products', href: '/products' },
          { label: 'Categories', href: '/categories' },
          { label: 'Brands', href: '/brands' },
          { label: 'Deals', href: '/deals' },
        ],
      },
      {
        title: 'Customer Service',
        items: [
          { label: 'Help Center', href: '/help' },
          { label: 'Returns', href: '/returns' },
          { label: 'Shipping Info', href: '/shipping' },
          { label: 'Size Guide', href: '/size-guide' },
        ],
      },
      {
        title: 'Account',
        items: [
          { label: 'My Account', href: '/account' },
          { label: 'Order History', href: '/orders' },
          { label: 'Wishlist', href: '/wishlist' },
          { label: 'Rewards', href: '/rewards' },
        ],
      },
    ],
    socialLinks: [
      { name: 'Facebook', href: 'https://facebook.com', icon: 'user' },
      { name: 'Instagram', href: 'https://instagram.com', icon: 'user' },
      { name: 'Twitter', href: 'https://twitter.com', icon: 'user' },
      { name: 'Pinterest', href: 'https://pinterest.com', icon: 'user' },
    ],
  },
};

export const Minimal: Story = {
  args: {
    companyName: 'Simple App',
    links: [],
    socialLinks: [],
  },
};

export const SaaS: Story = {
  args: {
    companyName: 'SaaS Platform',
    links: [
      {
        title: 'Platform',
        items: [
          { label: 'Features', href: '/features' },
          { label: 'Integrations', href: '/integrations' },
          { label: 'API', href: '/api' },
          { label: 'Security', href: '/security' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Documentation', href: '/docs' },
          { label: 'Tutorials', href: '/tutorials' },
          { label: 'Blog', href: '/blog' },
          { label: 'Webinars', href: '/webinars' },
        ],
      },
      {
        title: 'Company',
        items: [
          { label: 'About', href: '/about' },
          { label: 'Careers', href: '/careers' },
          { label: 'Contact', href: '/contact' },
          { label: 'Partners', href: '/partners' },
        ],
      },
    ],
    socialLinks: [
      { name: 'Twitter', href: 'https://twitter.com', icon: 'user' },
      { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'user' },
      { name: 'GitHub', href: 'https://github.com', icon: 'user' },
    ],
  },
};
