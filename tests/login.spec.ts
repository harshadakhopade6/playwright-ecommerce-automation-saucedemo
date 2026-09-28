import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

test.describe('Login Tests', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();
    });


    test('Verify successful login', async ({ page }) => {

        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );

        await expect(page).toHaveURL(/inventory/);

        await expect(
            page.getByText('Products')
        ).toBeVisible();
    });


    test('Verify login with invalid password', async () => {

        await loginPage.login(
            users.invalidPasswordUser.username,
            users.invalidPasswordUser.password
        );

        await expect(
            loginPage.getErrorMessage()
        ).resolves.toContain(
            'Username and password do not match'
        );
    });


    test('Verify login with invalid username', async () => {

        await loginPage.login(
            users.invalidUsernameUser.username,
            users.invalidUsernameUser.password
        );

        await expect(
            loginPage.getErrorMessage()
        ).resolves.toContain(
            'Username and password do not match'
        );
    });


    test('Verify login with empty credentials', async () => {

        await loginPage.clickLogin();

        await expect(
            loginPage.getErrorMessage()
        ).resolves.toContain(
            'Username is required'
        );
    });

});