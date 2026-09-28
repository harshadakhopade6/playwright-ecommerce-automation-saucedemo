# Playwright JavaScript Ecommerce Automation

This project contains end-to-end browser automation tests for the SauceDemo e-commerce website using Playwright and JavaScript/TypeScript.

## Features

- Login flow validation
- Product listing and sorting checks
- Add-to-cart functionality
- Checkout flow validation
- Page Object Model (POM) structure
- Reusable fixtures and test data

## Tech Stack

- Playwright
- JavaScript / TypeScript
- Node.js

## Project Structure

```bash
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── Pages/
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── LoginPage.ts
│   └── ProductsPage.ts
├── fixtures/
│   └── testFixtures.ts
├── test-data/
│   └── users.ts
├── tests/
│   ├── checkout.spec.ts
│   ├── login.spec.ts
│   └── products.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
└── package-lock.json
```

## Prerequisites

- Node.js 18 or above
- npm
- Playwright browsers installed

## Installation

```bash
npm install
npx playwright install
```

## Run Tests

```bash
npm test
```

Run in headed mode:

```bash
npm run test:headed
```

Debug tests:

```bash
npm run test:debug
```

Open the HTML report:

```bash
npm run report
```

## Configuration

The test configuration is in `playwright.config.ts`. It sets the base URL to the SauceDemo app and enables screenshots and traces on failure.

## Example Scenarios Covered

- Valid login
- Invalid password login
- Invalid username login
- Empty credential validation
- Product sorting
- Product addition to cart
- Multi-item cart checkout flow
- Order confirmation validation

## Notes

This suite is designed to validate core e-commerce user journeys against the public SauceDemo app and demonstrates a clean Playwright Page Object Model implementation.
