import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import mockData from './Input.mock.json';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: mockData.inputs[0],
};

export const WithLabel: Story = {
  args: mockData.inputs[0],
};

export const WithHelperText: Story = {
  args: mockData.inputs[2],
};

export const WithError: Story = {
  args: mockData.inputs[9],
};

export const Disabled: Story = {
  args: mockData.inputs[8],
};

export const Required: Story = {
  args: mockData.inputs[0],
};

export const Password: Story = {
  args: mockData.inputs[1],
};

export const Phone: Story = {
  args: mockData.inputs[3],
};

export const Website: Story = {
  args: mockData.inputs[4],
};

export const Search: Story = {
  args: mockData.inputs[5],
};

export const Age: Story = {
  args: mockData.inputs[6],
};

export const Company: Story = {
  args: mockData.inputs[7],
};

export const DifferentTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input label="Text" type="text" placeholder="Enter text" />
      <Input label="Email" type="email" placeholder="Enter email" />
      <Input label="Password" type="password" placeholder="Enter password" />
      <Input label="Number" type="number" placeholder="Enter number" />
      <Input label="Phone" type="tel" placeholder="Enter phone number" />
      <Input label="URL" type="url" placeholder="Enter URL" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input label="Normal" placeholder="Normal state" />
      <Input label="With Helper Text" placeholder="Helper text" helperText="This is helpful information" />
      <Input label="With Error" placeholder="Error state" error="This field has an error" />
      <Input label="Disabled" placeholder="Disabled state" disabled />
      <Input label="Required" placeholder="Required field" required />
    </div>
  ),
};
