# Playwright E-commerce UI Automation

A browser-automation project for the public [SauceDemo](https://www.saucedemo.com/) sample application. It uses Playwright Test with TypeScript, page objects, reusable test data, and a GitHub Actions workflow.

[![Playwright Tests](https://github.com/harshadakhopade6/playwright-ecommerce-automation-saucedemo/actions/workflows/playwright.yml/badge.svg)](https://github.com/harshadakhopade6/playwright-ecommerce-automation-saucedemo/actions/workflows/playwright.yml)

## What is covered

| Area | Verified scenarios in the current test files |
|---|---|
| Login | Successful login, invalid password, invalid username, empty credentials |
| Products | Products page visibility, sorting, adding one or multiple products to the cart |
| Checkout | End-to-end purchase flow, cart item verification, order confirmation |

The suite is a portfolio/sample-app exercise; it does not test a production commerce system.

## Stack

- TypeScript
- Playwright Test
- Node.js and npm
- Page Object Model (page classes under `pages/`)
- Test data under `test-data/`
- GitHub Actions workflow under `.github/workflows/`

## Project structure

```text
.
├── .github/workflows/playwright.yml
├── pages/
├── fixtures/
├── test-data/
├── tests/
│   ├── checkout.spec.ts
│   ├── login.spec.ts
│   └── products.spec.ts
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## Prerequisites

- Node.js (LTS recommended)
- npm

## Install and run

```bash
git clone https://github.com/harshadakhopade6/playwright-ecommerce-automation-saucedemo.git
cd playwright-ecommerce-automation-saucedemo
npm ci
npx playwright install
npm test
```

Run with a visible browser:

```bash
npm run test:headed
```

Run in debug mode:

```bash
npm run test:debug
```

Open the HTML report after a run:

```bash
npm run report
```

## Configuration and diagnostics

- Base URL: `https://www.saucedemo.com`
- Test directory: `tests/`
- Screenshots: captured on failure
- Trace: captured on the first retry
- Browser project: desktop Chromium, as configured in `playwright.config.ts`

## Continuous integration

The repository contains a GitHub Actions workflow that installs Node.js and Playwright dependencies and runs the test suite on pushes and pull requests targeting `main` or `master`. The workflow uploads the Playwright report as an artifact.

## Further improvements

Potential next steps—not yet claimed as implemented—include adding accessibility checks, API-level coverage, environment-driven configuration, and a reviewed test-data strategy.

## Author

**Harshada Khopade** · QA Automation / SDET portfolio

- [GitHub profile](https://github.com/harshadakhopade6)
- [LinkedIn](https://www.linkedin.com/in/harshadakhopade/)
