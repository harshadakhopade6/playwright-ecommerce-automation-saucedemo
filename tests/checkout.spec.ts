import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout Tests', () => {

    test('Complete an end-to-end purchase', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        // Login
        await loginPage.navigateToLoginPage();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        // Add product
        await productsPage.addProductToCart(
            'Sauce Labs Backpack'
        );

        // Open cart
        await productsPage.openCart();

        // Verify cart
        await cartPage.verifyCartItem(
            'Sauce Labs Backpack'
        );

        expect(
            await cartPage.getCartItemCount()
        ).toBe(1);

        // Checkout
        await cartPage.clickCheckout();

        // Customer details
        await checkoutPage.enterCustomerDetails(
            'Harshada',
            'Tester',
            'D01'
        );

        await checkoutPage.clickContinue();

        // Complete order
        await checkoutPage.clickFinish();

        // Verify order
        await checkoutPage.verifyOrderConfirmation();

        await expect(
            page.getByText('Thank you for your order!')
        ).toBeVisible();
    });

});