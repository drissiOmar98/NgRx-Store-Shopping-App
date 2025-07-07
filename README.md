# 🛍️ NgRx E-Commerce Store

A modern **E-Commerce Platform** built with Angular 19 and powered by NgRx for robust state management, featuring real-time cart updates, favorites system, and product catalog.
<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white">
  <img src="https://img.shields.io/badge/NgRx-BA55D3?style=for-the-badge&logo=ngrx&logoColor=white">
  <img src="https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=rxjs&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
</p>

<p align="center">
<img src="https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png" alt="NgRx Architecture" width="600">
</p>

## 🌟 Key Features

### 🛒 Core Shopping Experience
- 🛍️ **Product Catalog** with categories and search
- ❤️ **Favorites System** with persistent storage
- 🛒 **Shopping Cart** with quantity adjustments
- 💰 **Real-time Price Calculations**

### ⚡ NgRx State Management
- **🏪 Three Feature Stores**:
  - `CartStore`: Manages cart items, quantities, and totals
  - `FavoritesStore`: Handles wishlist functionality
  - `ProductsStore`: Controls product data and loading states
  
- **🔄 State Operations**:
  - 🏗️ **Actions**: `addToCart`, `removeFavorite`, `loadProducts`  
  - 🔄 **Effects**: API calls, localStorage sync  
  - 🎯 **Selectors**: Memoized data access (e.g., `selectCartTotal`)
  - ✨ **Reducers**: Immutable state updates

### 🎨 UI/UX Highlights
- 🧩 **Standalone Components** (Angular 17+)
- ⚡ **Signals Integration** for reactive templates
- 📱 **Mobile-First Responsive Design**
- 🎭 **Smooth Animations** for cart/favorites actions
- 💬 **Toast Notifications** for user feedback

## 🛠️ Tech Stack

### 🧱 Core Frameworks

| Technology | Purpose | Version |
|------------|---------|---------|
| <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="20"/> Angular | Frontend Framework | 17+ |
| <img src="https://ngrx.io/assets/images/badge.svg" width="20"/> NgRx | State Management | 16+ |
| <img src="https://cdn.worldvectorlogo.com/logos/rxjs-1.svg" width="20"/> RxJS | Reactive Programming | 7+ |

### 🧰 Libraries & APIs

| Technology | Purpose |
|------------|---------|
| <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="20"/> TypeScript | Type Safety |
| <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Font_Awesome_logomark_blue.svg" width="20"/> Font Awesome Icons | UI Icons |
| <img src="https://fakeapi.platzi.com/favicon.png" width="20"/> FakeStoreAPI | Product Data |

## 📂 Project Structure

```text
src/
├── app/
│   ├── features/
│   │   ├── cart/              # Cart logic + UI
│   │   │   ├── components/    # Cart-related views
│   │   │   └── store/         # Cart Actions, Reducers, Effects
│   │   ├── favorites/         # Wishlist logic & components
│   │   ├── products/          # Catalog, search, filters
│   │   └── shared-ui/         # Layout components, header, etc.
│   ├── core/
│   │   ├── store/             # App-level reducers/meta-reducers
│   │   └── services/          # API clients, storage sync
│   └── app.routes.ts         # Route configuration
├── shared/
│   ├── models/                # Interfaces, types, enums
│   ├── pipes/                 # Custom pipes
│   └── ui/                    # Reusable components (buttons, cards)
└── assets/                    # Static files (images, icons)
