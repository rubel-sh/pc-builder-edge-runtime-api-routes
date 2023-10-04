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

### Get All Products

-   **URL**: `/allproducts`
-   **Description**: Retrieve a list of all available products.

### Get Storage Information

-   **URL**: `/STORAGE`
-   **Description**: Get information about storage components.

### Get Limited Item Lists

-   **URL**: `/item_lists_limited_data?component=POWER_SUPPLY_UNIT`
-   **Description**: Retrieve limited data for a specific component, such as a POWER_SUPPLY_UNIT.

### Get Featured Products

-   **URL**: `/featured_products?limit=5`
-   **Description**: Retrieve a list of featured products with a specified limit of 5.

### Get Product by Unique Name

-   **URL**: `/product?unique_name=intel-core-i3-10100f`
-   **Description**: Retrieve product information based on its unique name, for example, "intel-core-i3-10100f".
