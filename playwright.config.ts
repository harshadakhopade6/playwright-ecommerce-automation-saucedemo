import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    use: {
        baseURL: 'https://www.saucedemo.com',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },

    projects: [
        {
            name: 'Desktop Chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
});
