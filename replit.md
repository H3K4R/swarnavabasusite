# Swarnava Basu Portfolio - Cloud & DevOps Engineer

## Overview

This is a professional portfolio website for Swarnava Basu, a Cloud & DevOps Engineer with 4+ years of experience. The application is built as a modern full-stack web application using React for the frontend, Express.js for the backend, and is designed to showcase professional experience, skills, projects, and achievements in the cloud and DevOps domain.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### Database Architecture
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with type-safe queries
- **Schema**: Located in `shared/schema.ts` for type sharing between client and server
- **Migrations**: Managed through Drizzle Kit

## Key Components

### UI Components
- Complete shadcn/ui component library implementation
- Custom components for skill bars, particles animation, and navigation
- Responsive design with mobile-first approach
- Dark/light theme support built into CSS variables

### Portfolio Sections
- **Hero Section**: Professional introduction with animated elements
- **About Section**: Detailed background and statistics
- **Skills Section**: Interactive skill bars with categories (Cloud Platforms, DevOps & Containers, Programming & Database)
- **Projects Section**: Showcase of major projects including HIPAA-compliant healthcare platforms
- **Experience Section**: Professional work history and achievements
- **Education Section**: Academic background and certifications
- **Contact Section**: Interactive contact form and professional links

### Custom Hooks
- `useIntersectionObserver`: For scroll-triggered animations
- `useIsMobile`: Responsive design utilities
- `useToast`: Notification system

## Data Flow

### Client-Side Data Flow
1. React components render with initial state
2. Intersection observers trigger animations on scroll
3. Form submissions handled through React Hook Form
4. Toast notifications provide user feedback
5. TanStack React Query manages API calls and caching

### Server-Side Data Flow
1. Express.js handles incoming requests
2. Routes defined in `server/routes.ts` (currently minimal)
3. Storage abstraction layer in `server/storage.ts` with in-memory implementation
4. Drizzle ORM provides type-safe database operations
5. Session management through PostgreSQL store

### Build Process
1. Vite builds the React frontend to `dist/public`
2. esbuild bundles the Express server to `dist/index.js`
3. TypeScript compilation ensures type safety across the stack
4. Development mode uses Vite middleware for hot reload

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, Radix UI primitives, class-variance-authority
- **Animations**: Framer Motion, Embla Carousel
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack React Query
- **Routing**: Wouter
- **Utilities**: date-fns, clsx, tailwind-merge

### Backend Dependencies
- **Server**: Express.js, @neondatabase/serverless
- **Database**: Drizzle ORM, connect-pg-simple
- **Development**: tsx, esbuild, Vite

### Development Tools
- **Build**: Vite, esbuild, TypeScript
- **Database**: Drizzle Kit for migrations
- **Linting/Formatting**: Built-in TypeScript checking

## Deployment Strategy

### Production Build
- Frontend assets built and optimized by Vite
- Server bundled as single ESM file with esbuild
- External packages referenced rather than bundled for Node.js compatibility

### Environment Configuration
- Database URL required via `DATABASE_URL` environment variable
- Drizzle configured for PostgreSQL dialect
- Session storage uses PostgreSQL with connect-pg-simple

### Hosting Considerations
- Designed for deployment on platforms supporting Node.js
- Static assets served from `dist/public` directory
- Server expects PostgreSQL database connection
- Environment variables required for database connectivity

### Development vs Production
- Development mode includes Vite middleware for hot reload
- Production mode serves pre-built static assets
- Replit-specific plugins included for development environment
- Runtime error overlay in development mode

## Changelog
```
Changelog:
- July 04, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```