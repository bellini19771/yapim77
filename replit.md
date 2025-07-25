# 77 Yapım - Film & Animation Production Studio

## Overview

This is a modern, full-stack web application for 77 Yapım, a film and animation production studio. The application serves as a company portfolio and client contact platform, featuring a cinematic single-page website with smooth animations, responsive design, and a contact form system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with separate client and server directories, using a modern React frontend with an Express.js backend. The architecture is designed for deployment on Replit with full-stack capabilities.

### Directory Structure
- `/client` - React frontend application
- `/server` - Express.js backend API
- `/shared` - Shared TypeScript schemas and types
- Root level contains configuration files for build tools and database

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and interactions
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Uses connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with tsx for TypeScript execution

### UI Component System
- **Design System**: shadcn/ui components built on Radix UI primitives
- **Theme**: Custom cinema-themed color palette with gold accents
- **Typography**: Playfair Display for headings, Inter for body text
- **Layout**: Responsive design with mobile-first approach

## Data Flow

### Contact Form Workflow
1. User fills out contact form on frontend
2. Form data validated using Zod schema on both client and server
3. POST request sent to `/api/contact` endpoint
4. Server validates data and stores inquiry in PostgreSQL database
5. Success/error response sent back to client
6. Toast notification displayed to user

### Database Schema
- **users**: Basic user management (currently unused but prepared for future authentication)
- **contact_inquiries**: Stores client contact form submissions with fields for name, email, project type, budget, and message

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **@radix-ui/***: Headless UI component primitives
- **react-hook-form**: Form state management
- **zod**: Runtime type validation
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **drizzle-kit**: Database migration tool
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- Uses Vite dev server for frontend with HMR (Hot Module Replacement)
- Express server runs with tsx for TypeScript execution
- Database migrations handled via drizzle-kit
- Replit-specific plugins provide additional development features

### Production Build Process
1. Frontend built using `vite build` to `/dist/public`
2. Backend bundled using `esbuild` to `/dist/index.js`
3. Static files served by Express in production
4. Environment variables required: `DATABASE_URL`, `NODE_ENV`

### Database Management
- PostgreSQL database configured via `DATABASE_URL` environment variable
- Drizzle ORM provides type-safe database operations
- Migrations stored in `/migrations` directory
- Schema defined in `/shared/schema.ts` for type sharing between client and server

### Architecture Benefits
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Modern Stack**: Uses current best practices with React 18, Vite, and modern tooling
- **Performance**: Optimized builds with code splitting and lazy loading
- **Developer Experience**: Hot reload, TypeScript support, and integrated tooling
- **Scalability**: Modular architecture allows for easy feature additions

### Key Design Decisions
- **Monorepo Structure**: Keeps related code together while maintaining separation of concerns
- **Shared Schema**: Ensures type consistency between client and server validation
- **Memory Storage Fallback**: MemStorage class provides development fallback when database isn't available
- **Component-Based UI**: Modular React components for maintainable frontend code
- **API-First Design**: Clean REST API structure for potential future mobile app integration