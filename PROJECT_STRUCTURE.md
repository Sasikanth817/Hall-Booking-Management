# Project Structure

This document explains the organization of the Booking Management project files.

## Directory Structure

```
booking management/
├── backend/              # Backend code (API routes, models, database connections)
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication related endpoints
│   │   ├── bookings/     # Booking related endpoints
│   │   ├── halls/        # Hall related endpoints
│   │   ├── users/        # User related endpoints
│   │   └── ...           # Other API endpoints
│   ├── lib/              # Database connection and utilities
│   └── models/           # Database models (Booking, Hall, User)
├── frontend/             # Frontend code (pages, components, styles)
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   │   ├── admin-dashboard/
│   │   ├── auth/
│   │   ├── availability/
│   │   ├── booking-form/
│   │   ├── forgot-password/
│   │   ├── halls-dashboard/
│   │   ├── reset-password/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── styles/           # CSS styles
│       └── globals.css
└── ...                   # Configuration files, node_modules, etc.
```

## Organization Explanation

### Backend
The [backend](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/backend) directory contains all server-side code:
- [API routes](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/backend/api) for handling HTTP requests
- [Database models](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/backend/models) for data structure definitions
- [Library files](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/backend/lib) for database connections and utilities

### Frontend
The [frontend](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/frontend) directory contains all client-side code:
- [Page components](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/frontend/pages) for different views
- [Reusable components](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/frontend/components)
- [CSS styles](file:///c%3A/Users/sasik/OneDrive/Desktop/Booking%20Management%28F%29/booking%20management/frontend/styles)

This separation makes it easier to understand which files are responsible for frontend presentation and which handle backend logic.