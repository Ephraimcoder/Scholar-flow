# ScholarFlow Landing Page

A high-performance, single-page landing page for the ScholarFlow student task management app.

## Features

- **Modern Design**: Clean, minimalist aesthetic with lavender/mauve background
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with React and Vite for fast development and production builds
- **Beautiful Gradients**: Organic gradient shapes and abstract background orbs
- **Typography**: Modern Inter font with bold, impactful headlines

## Tech Stack

- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool and dev server

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Header with logo
│   │   └── Hero.jsx        # Hero section with CTA
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles and Tailwind
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## Design Features

- **Color Palette**: Soft lavender (#F1EFF9) background, vibrant purple (#9063FF) highlights
- **Typography**: Bold, modern sans-serif with uppercase logo
- **Layout**: Two-column hero section on desktop, stacked on mobile
- **Interactive Elements**: Hover effects on download button
- **Background**: Abstract gradient orbs with organic shapes

## Customization

The design is easily customizable through:
- `tailwind.config.js` for color and font changes
- Component files for layout modifications
- CSS classes for styling adjustments
