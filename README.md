# Product Training

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

This project includes a comprehensive atomic design component library with:

### Atoms (Basic building blocks)
- **Button**: Multiple variants (primary, secondary, outline, ghost) and sizes
- **Input**: Form input with label, error states, and helper text
- **Text**: Typography component with variants, colors, and weights
- **Icon**: SVG icon component with size and color variants

### Molecules (Combinations of atoms)
- **SearchBox**: Search input with icon, clear button, and search functionality
- **Card**: Container component with header, content, and multiple variants
- **FormField**: Complete form field with label, input, and validation

### Organisms (Complex UI sections)
- **Header**: Navigation header with logo, menu, search, and mobile responsiveness
- **Footer**: Site footer with links, social media, and company information
- **ProductList**: Product grid with cards, images, ratings, and actions

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Component Usage

```tsx
import { Button, Card, Header, ProductList } from '@/components';

// Use any component with full TypeScript support
<Button variant="primary" size="lg">Click me</Button>
<Card title="Product" variant="elevated">Content here</Card>
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.