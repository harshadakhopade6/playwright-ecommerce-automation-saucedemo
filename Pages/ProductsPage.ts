import { Page, Locator } from '@playwright/test';

export class ProductsPage {

    private page: Page;
    private productsTitle: Locator;
    private productSort: Locator;
    private shoppingCart: Locator;

    constructor(page: Page) {
        this.page = page;

        this.productsTitle = page.getByText('Products');
        this.productSort = page.locator('[data-test="product-sort-container"]');
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    }

    async verifyProductsPage() {
        await this.productsTitle.waitFor();
    }

    async sortProducts(option: string) {
        await this.productSort.selectOption(option);
    }

    async addProductToCart(productName: string) {
        const product = this.page.locator('.inventory_item')
            .filter({ hasText: productName });

        await product.getByRole('button', { name: /Add to cart/i }).click();
    }

    async openCart() {
        await this.shoppingCart.click();
    }

    async getCartItemCount() {
        return await this.page.locator('[data-test="shopping-cart-badge"]').textContent();
    }
}