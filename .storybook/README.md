# Storybook Configuration

This Storybook setup provides a comprehensive component library documentation and testing environment for the Product Training application.

## Features

- **Atomic Design Structure**: Organized by Atoms, Molecules, and Organisms
- **Interactive Controls**: Test component props in real-time
- **Accessibility Testing**: Built-in a11y checks for all components
- **Responsive Testing**: Multiple viewport sizes for mobile/desktop testing
- **Background Testing**: Light/dark/gray backgrounds for visual testing
- **Auto-documentation**: Automatic docs generation from component props
- **TypeScript Support**: Full type safety and IntelliSense

## Available Addons

- **@storybook/addon-docs**: Automatic documentation generation
- **@storybook/addon-a11y**: Accessibility testing
- **@storybook/addon-controls**: Interactive prop controls
- **@storybook/addon-actions**: Action logging
- **@storybook/addon-viewport**: Responsive testing
- **@storybook/addon-backgrounds**: Background color testing
- **@storybook/addon-vitest**: Component testing integration

## Component Categories

### Atoms
- **Button**: Interactive button with multiple variants
- **Input**: Form input with validation states
- **Text**: Typography component with variants
- **Icon**: SVG icon component with size/color options

### Molecules
- **SearchBox**: Search input with icon and clear functionality
- **Card**: Container component with header/content
- **FormField**: Complete form field with label/validation

### Organisms
- **Header**: Navigation header with responsive design
- **Footer**: Site footer with links and social media
- **ProductList**: Product grid with cards and actions

## Usage

### Running Storybook
```bash
npm run storybook
```

### Building Storybook
```bash
npm run build-storybook
```

### Testing Components
```bash
npm run test-storybook
```

## Writing Stories

Each component should have a corresponding `.stories.tsx` file with:

1. **Meta configuration** with title, component, and parameters
2. **Default story** showing basic usage
3. **Variant stories** for different props
4. **Interactive stories** with controls
5. **Comprehensive examples** showing real-world usage

### Example Story Structure
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './Component';

const meta: Meta<typeof Component> = {
  title: 'Category/Component',
  component: Component,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    // Define controls for props
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};
```

## Best Practices

1. **Use semantic titles** that reflect the component hierarchy
2. **Include comprehensive argTypes** for all interactive props
3. **Add real-world examples** that show practical usage
4. **Test different states** (loading, error, empty, etc.)
5. **Include accessibility considerations** in stories
6. **Use responsive layouts** for organism components
7. **Document complex interactions** with action handlers

## Customization

The Storybook configuration can be customized in:
- `.storybook/main.ts` - Main configuration
- `.storybook/preview.ts` - Global parameters and decorators
- `.storybook/globals.css` - Global styles

## Integration

This Storybook setup integrates with:
- **Next.js** for framework compatibility
- **TypeScript** for type safety
- **CSS Modules** for component styling
- **Vitest** for component testing
- **Accessibility tools** for inclusive design
