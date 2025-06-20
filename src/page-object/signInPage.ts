import { Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class SignInPage extends HelperBase {
  constructor(page: Page) {
    super(page);
  }

  async performLogin() {
    await this.page
      .getByPlaceholder("Your email")
      .fill("admin@practicesoftwaretesting.com");
    await this.page.getByPlaceholder("Your password").fill("welcome01");
    await this.waitForSeconds(5);
    await this.page.getByRole("button", { name: "Login" }).click();
  }

  /**
   *
   * @param email A registered user email must be entered
   * @param password A registered user password must be entered
   * @param optionText The name of the button to be clicked on the page must be entered
   */
  async performLoginWithData(email: string, password: string) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLoginButton();
  }

  async enterEmail(email: string) {
    await this.page.getByPlaceholder("Your email").fill(email);
  }

  async enterPassword(password: string) {
    await this.page.getByPlaceholder("Your password").fill(password);
  }

  async clickLoginButton() {
    await this.page.locator(".btnSubmit").click();
  }

  async registerYourAccountLink() {
    await this.page
      .getByRole("link", { name: "Register your account" })
      .click();
  }

  async verifyPageHeader() {
    await expect(this.page.getByRole("heading")).toHaveText("Login");
  }

  async verifyWithProfileName(firstName: string, lastName: string) {
    await expect(this.page.locator("#menu")).toBeVisible();
    await expect(this.page.locator("#menu")).toContainText(
      firstName + " " + lastName
    );
  }
}
