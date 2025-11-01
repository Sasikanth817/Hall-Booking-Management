# Development Guide

This document explains how to set up and run the Booking Management application.

## Project Structure

The project is organized into two main directories:
- [backend](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/backend): Contains all server-side code (API routes, models, database connections)
- [frontend](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/frontend): Contains all client-side code (pages, components, styles)

## Running the Application

Since this is a Next.js application, both frontend and backend are served by the same server.

To run the development server:

```bash
npm run dev
```

This will start the application on `http://localhost:3000`.

## Building for Production

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Directory Details

### Backend ([backend](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/backend))
- [api](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/backend/api): Contains API routes grouped by functionality
- [models](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/backend/models): Database models for Booking, Hall, and User entities
- [lib](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/backend/lib): Utility functions and database connection setup
- `users.json` and `reset-tokens.json`: Data files for user management and password reset functionality

### Frontend ([frontend](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%28F%29/booking%20management/frontend))
- [pages](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/frontend/pages): Page components that correspond to different routes in the application
- [components](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/frontend/components): Reusable UI components
- [styles](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/frontend/styles): Global CSS styles

## Important Notes

- The application uses MongoDB as its database
- Environment variables are stored in [.env.local](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/.env.local)
- The application uses Next.js App Router for routing