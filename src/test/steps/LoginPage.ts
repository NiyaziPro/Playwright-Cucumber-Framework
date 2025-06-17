import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

Given("go to the web page", async function () {
  await pageFixture.page.goto("https://practicesoftwaretesting.com/");
});

When("click to the sign in link", async function () {
  await pageFixture.page.getByRole("link", { name: "Sign in" }).click();
});

When("entered {string} in email field", async function (email) {
  //await pageFixture.page.getByPlaceholder("Your email").fill(email);
  await pageFixture.pm.signIn().enterEmail(email);
});

When("entered {string} in password field", async function (password) {
  //await pageFixture.page.getByPlaceholder("Your password").fill(password);
  await pageFixture.pm.signIn().enterPassword(password);
});

When("click to the Login button", async function () {
  //await pageFixture.page.locator(".btnSubmit").click();
  await pageFixture.pm.signIn().clickLoginButton();
});

Then("verify that logged in", async function () {
 // await expect(pageFixture.page.locator("h1", { hasText: "My account" })).toBeVisible();
 await pageFixture.pm.onRegisterPage().verifyPageHeaderToBeVisible();
});

When("click to the Register your account link", async function () {
  await pageFixture.page
    .getByRole("link", { name: "Register your account" })
    .click();
});
