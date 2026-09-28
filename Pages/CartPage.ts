import { Page, Locator } from '@playwright/test';

export class CartPage {

    private page: Page;
    private checkoutButton: Locator;
    private cartItems: Locator;

    constructor(page: Page) {
        this.page = page;

        this.checkoutButton = page.getByRole('button', {
            name: 'Checkout'
        });

        this.cartItems = page.locator('.cart_item');
    }

    async verifyCartItem(productName: string) {
        const item = this.cartItems.filter({
            hasText: productName
        });

        await item.waitFor();
    }

    async getCartItemCount() {
        return await this.cartItems.count();
    }

    async removeProduct(productName: string) {
        const item = this.cartItems.filter({
            hasText: productName
        });

        await item.getByRole('button', {
            name: /Remove/i
        }).click();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}