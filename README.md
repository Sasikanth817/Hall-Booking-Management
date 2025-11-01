# Centurion University Landing Page

A modern, responsive landing page for Centurion University built with Next.js and Tailwind CSS.

## Features

- Clean, modern design matching the Centurion University branding
- Responsive layout with header and main content sections
- Two interactive buttons: "Sign Up" and "Get Started"
- Beautiful gradient logo design
- Optimized for performance and accessibility

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles
├── tailwind.config.ts  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

## Design Elements

- **Header**: Contains the university logo and "Sign Up" button
- **Main Content**: Split into two sections:
  - Left: University tagline and "Get Started" button
  - Right: Large circular university emblem
- **Color Scheme**: White background with black text and colorful logo gradients
- **Typography**: Bold headings with clean, modern fonts

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint 