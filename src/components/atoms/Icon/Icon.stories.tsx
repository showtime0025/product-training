import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import mockData from './Icon.mock.json';

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
  args: mockData.icons[0],
};

export const User: Story = {
  args: mockData.icons[1],
};

export const Heart: Story = {
  args: mockData.icons[4],
};

export const Star: Story = {
  args: mockData.icons[5],
};

export const Home: Story = {
  args: mockData.icons[6],
};

export const Menu: Story = {
  args: mockData.icons[7],
};

export const Close: Story = {
  args: mockData.icons[8],
};

export const Arrow: Story = {
  args: mockData.icons[9],
};

export const Plus: Story = {
  args: mockData.icons[10],
};

export const Minus: Story = {
  args: mockData.icons[11],
};

export const Check: Story = {
  args: mockData.icons[12],
};

export const Edit: Story = {
  args: mockData.icons[13],
};

export const Delete: Story = {
  args: mockData.icons[14],
};

export const Email: Story = {
  args: mockData.icons[2],
};

export const Phone: Story = {
  args: mockData.icons[3],
};

export const SmallStar: Story = {
  args: mockData.icons[15],
};

export const LargeStar: Story = {
  args: mockData.icons[16],
};

export const ExtraLargeStar: Story = {
  args: mockData.icons[17],
};

export const SmallHeart: Story = {
  args: mockData.icons[18],
};

export const LargeHeart: Story = {
  args: mockData.icons[19],
};

export const SmallSearch: Story = {
  args: mockData.icons[20],
};

export const LargeSearch: Story = {
  args: mockData.icons[21],
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
