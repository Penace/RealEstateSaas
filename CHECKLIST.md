---
title: RealEstateSaaS – Phase 1 Modular Checklist
type: development-checklist
version: 0.1
created: 2025-04-26
modified: 2025-04-26
tags: [checklist, realestate-saas, fullstack-development]
status: active
---

# Phase 1 Modular Checklist – MVP Focus

---

## Frontend Modules

### Home / Landing Page
- [x] Create Hero Section (full-screen image + text overlay)
- [x] Implement Animated Scroll Effects (zoom, parallax)
- [ ] Build Featured Listings Section (top 5 properties)

### Listings Page
- [ ] Create All Listings Grid (property cards)
- [ ] Add Filter/Search Bar (basic keyword filtering)
- [ ] Listing Card Component (price, image, location)

### Property Detail Page
- [ ] Property Image Carousel
- [ ] Price, Mortgage Estimation, Auction Countdown
- [ ] Contact Seller Section

### Mortgage Calculator Component
- [ ] Create Mortgage Form UI
- [ ] Implement Basic Mortgage Calculation Logic
- [ ] Display Monthly Payment Result

---

## Backend Modules (json-server)

### Setup & Schema
- [ ] Install and Configure json-server
- [ ] Create `listings.json` Schema
- [ ] Seed with 10 Sample Property Listings

### API Endpoints
- [ ] GET `/listings`
- [ ] GET `/listings/:id`
- [ ] (Optional) POST `/inquiries` (future stretch)

---

## Frontend ↔ Backend Connection

- [ ] Connect Listings Page to `/listings` API
- [ ] Fetch Property Detail Page by ID from API
- [ ] Test Mortgage Calculator independently (for now)

---

## Design and UI Polish

- [ ] Apply Tailwind Styling to All Pages
- [ ] Responsive Design (Desktop, Tablet, Mobile)
- [ ] Apply Consistent Typography and Color Scheme

---

# 🔥 Optional Stretch (Only if Fast Progress)
- [ ] Animated Mortgage Calculator Result
- [ ] Bookmark/Favorite Listing Button (frontend only)

---

> *"Systems are not built by ambition alone.  
They are built by small, consistent, traceable modules."*
