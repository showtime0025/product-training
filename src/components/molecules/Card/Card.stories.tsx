import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a basic card with default styling.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Card Title',
    children: 'This card has a title and some content.',
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: 'Product Card',
    subtitle: 'Premium subscription',
    children: 'This card includes both a title and subtitle.',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    title: 'Outlined Card',
    children: 'This card has an outlined variant with a thicker border.',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    title: 'Elevated Card',
    children: 'This card has a shadow for elevation effect.',
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    title: 'No Padding',
    children: 'This card has no padding.',
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    title: 'Small Padding',
    children: 'This card has small padding.',
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    title: 'Large Padding',
    children: 'This card has large padding.',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    subtitle: 'Click me!',
    children: 'This card is clickable and will show an alert.',
    onClick: () => alert('Card clicked!'),
  },
};

export const ProductCard: Story = {
  render: () => (
    <Card
      variant="elevated"
      padding="none"
      style={{ width: '300px' }}
    >
      <div style={{ padding: '16px' }}>
        <div style={{ 
          height: '200px', 
          backgroundColor: '#f3f4f6', 
          borderRadius: '8px',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6b7280'
        }}>
          Product Image
        </div>
        <Text variant="h5" weight="semibold" style={{ marginBottom: '8px' }}>
          Premium Headphones
        </Text>
        <Text variant="body" color="secondary" style={{ marginBottom: '16px' }}>
          High-quality wireless headphones with noise cancellation.
        </Text>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text variant="h5" weight="bold" color="primary">
            $199.99
          </Text>
          <Button variant="primary" size="sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card variant="default" title="Default" style={{ width: '200px' }}>
        Default card variant
      </Card>
      <Card variant="outlined" title="Outlined" style={{ width: '200px' }}>
        Outlined card variant
      </Card>
      <Card variant="elevated" title="Elevated" style={{ width: '200px' }}>
        Elevated card variant
      </Card>
    </div>
  ),
};
