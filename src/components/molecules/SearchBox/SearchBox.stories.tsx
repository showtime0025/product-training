import type { Meta, StoryObj } from '@storybook/react';
import { SearchBox } from './SearchBox';

const meta: Meta<typeof SearchBox> = {
  title: 'Molecules/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    showClearButton: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: 'Search products...',
  },
};

export const WithDefaultValue: Story = {
  args: {
    placeholder: 'Search...',
    defaultValue: 'React components',
  },
};

export const WithoutClearButton: Story = {
  args: {
    placeholder: 'Search...',
    showClearButton: false,
  },
};

export const WithSearchHandler: Story = {
  args: {
    placeholder: 'Search...',
    onSearch: (query: string) => {
      console.log('Searching for:', query);
      alert(`Searching for: ${query}`);
    },
  },
};

export const WithClearHandler: Story = {
  args: {
    placeholder: 'Search...',
    defaultValue: 'Initial search',
    onClear: () => {
      console.log('Search cleared');
      alert('Search cleared!');
    },
  },
};

export const Responsive: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <SearchBox placeholder="Search in responsive container..." />
    </div>
  ),
};

export const InForm: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <h3>Product Search</h3>
      <SearchBox 
        placeholder="Search products..." 
        onSearch={(query) => alert(`Searching for: ${query}`)}
      />
      <p style={{ fontSize: '14px', color: '#6b7280' }}>
        Enter a product name or category to search
      </p>
    </div>
  ),
};
