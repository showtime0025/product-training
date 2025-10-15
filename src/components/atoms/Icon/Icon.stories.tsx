import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'search', 'user', 'heart', 'star', 'home', 'menu', 'close', 'arrow', 
        'plus', 'minus', 'check', 'edit', 'delete'
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted', 'error', 'success', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
  args: {
    name: 'search',
  },
};

export const User: Story = {
  args: {
    name: 'user',
  },
};

export const Heart: Story = {
  args: {
    name: 'heart',
  },
};

export const Star: Story = {
  args: {
    name: 'star',
  },
};

export const Home: Story = {
  args: {
    name: 'home',
  },
};

export const Menu: Story = {
  args: {
    name: 'menu',
  },
};

export const Close: Story = {
  args: {
    name: 'close',
  },
};

export const Arrow: Story = {
  args: {
    name: 'arrow',
  },
};

export const Plus: Story = {
  args: {
    name: 'plus',
  },
};

export const Minus: Story = {
  args: {
    name: 'minus',
  },
};

export const Check: Story = {
  args: {
    name: 'check',
  },
};

export const Edit: Story = {
  args: {
    name: 'edit',
  },
};

export const Delete: Story = {
  args: {
    name: 'delete',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon name="star" size="sm" />
      <Icon name="star" size="md" />
      <Icon name="star" size="lg" />
      <Icon name="star" size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon name="heart" color="primary" />
      <Icon name="heart" color="secondary" />
      <Icon name="heart" color="muted" />
      <Icon name="heart" color="error" />
      <Icon name="heart" color="success" />
      <Icon name="heart" color="warning" />
    </div>
  ),
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', 
      gap: '16px',
      width: '600px'
    }}>
      {[
        'search', 'user', 'heart', 'star', 'home', 'menu', 'close', 'arrow', 
        'plus', 'minus', 'check', 'edit', 'delete'
      ].map((iconName) => (
        <div key={iconName} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '8px',
          padding: '16px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px'
        }}>
          <Icon name={iconName} size="lg" />
          <span style={{ fontSize: '12px', color: '#6b7280' }}>{iconName}</span>
        </div>
      ))}
    </div>
  ),
};
