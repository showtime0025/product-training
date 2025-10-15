import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import mockData from './Text.mock.json';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['body', 'caption', 'overline', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted', 'error', 'success', 'warning'],
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: mockData.texts[0],
};

export const Caption: Story = {
  args: mockData.texts[2],
};

export const Overline: Story = {
  args: mockData.texts[3],
};

export const Heading1: Story = {
  args: mockData.texts[4],
};

export const Heading2: Story = {
  args: mockData.texts[5],
};

export const Heading3: Story = {
  args: mockData.texts[6],
};

export const Heading4: Story = {
  args: mockData.texts[7],
};

export const Heading5: Story = {
  args: mockData.texts[8],
};

export const Heading6: Story = {
  args: mockData.texts[9],
};

export const ErrorText: Story = {
  args: mockData.texts[10],
};

export const SuccessText: Story = {
  args: mockData.texts[11],
};

export const WarningText: Story = {
  args: mockData.texts[12],
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text color="primary">Primary text</Text>
      <Text color="secondary">Secondary text</Text>
      <Text color="muted">Muted text</Text>
      <Text color="error">Error text</Text>
      <Text color="success">Success text</Text>
      <Text color="warning">Warning text</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text weight="normal">Normal weight</Text>
      <Text weight="medium">Medium weight</Text>
      <Text weight="semibold">Semibold weight</Text>
      <Text weight="bold">Bold weight</Text>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Text align="left">Left aligned text</Text>
      <Text align="center">Center aligned text</Text>
      <Text align="right">Right aligned text</Text>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
      <Text variant="h4">Heading 4</Text>
      <Text variant="h5">Heading 5</Text>
      <Text variant="h6">Heading 6</Text>
      <Text variant="body">Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <Text variant="caption">Caption text</Text>
      <Text variant="overline">Overline text</Text>
    </div>
  ),
};
