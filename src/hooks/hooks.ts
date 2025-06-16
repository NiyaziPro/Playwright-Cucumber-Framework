import { Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { Page, Browser, BrowserContext, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
});
AfterAll(async function () {
  await browser.close();
});

Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
});

After(async function () {
  await pageFixture.page.close();
  await context.close();
});
