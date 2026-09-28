import { Page, Locator } from '@playwright/test';

export class CheckoutPage {

    private page: Page;

    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private postalCodeInput: Locator;
    private continueButton: Locator;
    private finishButton: Locator;
    private confirmationMessage: Locator;

    constructor(page: Page) {

        this.page = page;

        this.firstNameInput =
            page.getByPlaceholder('First Name');

        this.lastNameInput =
            page.getByPlaceholder('Last Name');

        this.postalCodeInput =
            page.getByPlaceholder('Zip/Postal Code');

        this.continueButton =
            page.getByRole('button', {
                name: 'Continue'
            });

        this.finishButton =
            page.getByRole('button', {
                name: 'Finish'
            });

        this.confirmationMessage =
            page.getByText('Thank you for your order!');
    }

    async enterCustomerDetails(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {

        await this.firstNameInput.fill(firstName);

        await this.lastNameInput.fill(lastName);

        await this.postalCodeInput.fill(postalCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async clickFinish() {
        await this.finishButton.click();
    }

    async verifyOrderConfirmation() {
        await this.confirmationMessage.waitFor();
    }
}