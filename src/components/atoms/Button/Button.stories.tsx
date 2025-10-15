import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import mockData from './Button.mock.json';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: mockData.buttons[0],
};

export const Secondary: Story = {
  args: mockData.buttons[1],
};

export const Outline: Story = {
  args: mockData.buttons[2],
};

export const Ghost: Story = {
  args: mockData.buttons[3],
};

export const Small: Story = {
  args: mockData.buttons[4],
};

export const Medium: Story = {
  args: mockData.buttons[0],
};

export const Large: Story = {
  args: mockData.buttons[5],
};

export const Disabled: Story = {
  args: mockData.buttons[6],
};

export const Loading: Story = {
  args: mockData.buttons[7],
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
