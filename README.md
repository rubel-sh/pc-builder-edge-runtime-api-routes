## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Features

-   Homepage SSG + ISR Implementaion
-   Feature Products are updated every 2 minutes
-   Feature Categories
-   Build PC and Print the final Build
-   PC Builder Page can only be accessed after login
-   Night Mode

## Technologies

-   Nextjs 13
-   Nextjs Edge Runtime Api Routes
-   Mongodb
-   Shadcn/ui
-   SSR, SSG

## API Routes

-   GET /allproducts
-   GET /STORAGE
-   GET /item_lists_limited_data?component=POWER_SUPPLY_UNIT
-   GET /featured_products?limit=5
-   GET /product?unique_name=intel-core-i3-10100f
