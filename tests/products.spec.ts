import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Products Tests', () => {

    let loginPage: LoginPage;
    let productsPage: ProductsPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );
    });


    test('Verify products page is displayed', async () => {

        await productsPage.verifyProductsPage();

    });


    test('Verify products can be sorted', async () => {

        await productsPage.sortProducts('lohi');

    });


    test('Verify product can be added to cart', async () => {

        await productsPage.addProductToCart('Sauce Labs Backpack');

        const cartCount =
            await productsPage.getCartItemCount();

        expect(cartCount).toBe('1');
    });


    test('Verify multiple products can be added to cart', async () => {

        await productsPage.addProductToCart(
            'Sauce Labs Backpack'
        );

        await productsPage.addProductToCart(
            'Sauce Labs Bike Light'
        );

        const cartCount =
            await productsPage.getCartItemCount();

        expect(cartCount).toBe('2');
    });

});