import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Test/Basic',
  component: () => <div>Hello Storybook!</div>,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f0f0', 
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2>Storybook Test</h2>
      <p>If you can see this, Storybook is working!</p>
    </div>
  ),
};
