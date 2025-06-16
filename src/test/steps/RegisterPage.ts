import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

Then("verify that  is Customer registration page", async () => {
  await expect(pageFixture.page.getByRole("heading")).toHaveText("Customer registration");
});
