import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Full Name',
    name: 'fullName',
    placeholder: 'Enter your full name',
  },
};

export const Email: Story = {
  args: {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    name: 'required',
    placeholder: 'This field is required',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Phone Number',
    name: 'phone',
    type: 'tel',
    placeholder: 'Enter your phone number',
    helperText: 'Include country code for international numbers',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    error: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    name: 'disabled',
    placeholder: 'This field is disabled',
    disabled: true,
  },
};

export const Number: Story = {
  args: {
    label: 'Age',
    name: 'age',
    type: 'number',
    placeholder: 'Enter your age',
  },
};

export const URL: Story = {
  args: {
    label: 'Website',
    name: 'website',
    type: 'url',
    placeholder: 'https://example.com',
  },
};

export const ContactForm: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <h3>Contact Information</h3>
      <FormField
        label="Full Name"
        name="fullName"
        placeholder="Enter your full name"
        required
      />
      <FormField
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter your email"
        required
      />
      <FormField
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="Enter your phone number"
        helperText="Include country code for international numbers"
      />
      <FormField
        label="Company Website"
        name="website"
        type="url"
        placeholder="https://example.com"
      />
    </div>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <h3>Sign In</h3>
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        required
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        required
        helperText="Must be at least 8 characters long"
      />
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <FormField label="Text" name="text" type="text" placeholder="Text input" />
      <FormField label="Email" name="email" type="email" placeholder="Email input" />
      <FormField label="Password" name="password" type="password" placeholder="Password input" />
      <FormField label="Number" name="number" type="number" placeholder="Number input" />
      <FormField label="Phone" name="phone" type="tel" placeholder="Phone input" />
      <FormField label="URL" name="url" type="url" placeholder="URL input" />
    </div>
  ),
};
