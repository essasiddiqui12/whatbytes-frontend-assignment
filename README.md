# WhatBytes Frontend Assignment - E-commerce Product Listing

A modern e-commerce product listing application built with Next.js and Tailwind CSS for the WhatBytes Frontend Developer Intern assignment.

## Live Demo

**Deployed URL:** [Coming Soon - Will be deployed to Vercel]

## Assignment Requirements Completed

**Home Page (/) - Product Listing**
- Header with logo, search bar, and cart icon with badge
- Sidebar with category filters and price range slider
- Responsive product grid (3 columns desktop, 2 tablet, 1 mobile)
- Product cards with image, title, price, rating, and "Add to Cart" button
- Footer with copyright and social media icons

**Product Detail Page (/product/[id])**
- Dynamic routing with Next.js
- Product image display
- Product details (title, price, description, category)
- Quantity selector
- Add to Cart functionality
- Responsive design

**Bonus - Cart Page (/cart)**
- List of added products
- Quantity update controls
- Remove item functionality
- Price summary with subtotal, tax, and total
- Responsive design

**Logic Implementation**
- Category and price filtering
- Search functionality with string matching
- URL-based filters support
- Client-side state management with Zustand
- Cart state persistence in localStorage
- Conditional rendering for empty states

## Technology Stack

- **Framework:** Next.js 15.4.6 with App Router
- **Styling:** Tailwind CSS 4.0
- **Language:** TypeScript
- **State Management:** Zustand with localStorage persistence
- **Icons:** Lucide React
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/
│   ├── cart/
│   │   └── page.tsx
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── ProductCard.tsx
│   └── Footer.tsx
├── data/
│   └── products.ts
├── store/
│   └── cart.ts
└── types/
    └── product.ts
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd whatbytes-assignment
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

### Home Page
- **Search**: Real-time product search across title and description
- **Category Filtering**: Filter products by All, Electronics, Clothing, or Home
- **Price Range**: Slider to filter products by price range (0-1000)
- **Responsive Grid**: Adapts to different screen sizes
- **Product Cards**: Display product image, title, price, rating, and quick add to cart

### Product Detail Page
- **Dynamic Routing**: URL-based product pages (/product/[id])
- **Product Information**: Detailed view with description and category
- **Quantity Selection**: Increment/decrement quantity before adding to cart
- **Add to Cart**: Add multiple quantities at once

### Cart Page (Bonus)
- **Cart Management**: View all added products
- **Quantity Control**: Update quantities or remove items
- **Price Calculation**: Real-time total calculation with tax
- **Persistent Storage**: Cart state saved in localStorage

## Design Implementation

The application closely matches the provided design mockup with:
- Blue color scheme (#3B82F6 primary)
- Clean, modern interface
- Responsive layout
- Proper spacing and typography
- Interactive elements with hover states

## Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

This project is configured for easy deployment on Vercel:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Assignment Compliance

- Next.js setup with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Logical feature-based commits
- Public GitHub repository
- Responsive design matching mockup
- All required functionality implemented
- Bonus cart page included

## Developer

Built for WhatBytes Frontend Developer Intern Assignment

---

**Assignment Completion Date:** August 17, 2025  
**Submission Requirements:** GitHub repository + Video demonstration