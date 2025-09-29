# Sato WebApp

## Overview
This is a React-based web application for Sato, featuring authentic Thai flavors and traditional recipes. The application showcases products and provides information about the company's offerings.

## Architecture
- **Frontend**: React 19.1.1 with React Router for navigation
- **Build Tool**: Vite 7.1.7 with React plugin
- **Languages**: JavaScript/JSX with ES modules
- **Styling**: CSS modules for component-specific styles

## Project Structure
- `src/components/` - React components with corresponding CSS modules
- `src/data/` - Static data files for products, ingredients, and comments
- `src/assets/` - Images and static assets
- `public/` - Public static files
- `dist/` - Built production files (generated)

## Key Features
- Home page with Thai product showcase
- Products catalog with image carousels
- Product detail pages with variants
- Navigation for Events/Workshop, About, Sustainability, and Contact pages
- Responsive design with modern CSS modules

## Development Setup
- Uses Vite dev server on port 5000
- Configured for Replit environment with host 0.0.0.0
- Hot reloading enabled for development

## Deployment
- Configured for autoscale deployment
- Build command: `npm run build`
- Preview command: `npx vite preview`

## Recent Changes
- Configured Vite server for Replit compatibility (2025-09-29)
- Set up workflow for development server on port 5000
- Configured deployment settings for production

## Dependencies
- React ecosystem (React, React DOM, React Router)
- Vite build system with React plugin
- ESLint for code quality
- Babel React Compiler for optimization