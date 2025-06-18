import {
  Before,
  After,
  BeforeAll,
  AfterAll,
  AfterStep,
  Status,
} from "@cucumber/cucumber";
import { Page, Browser, BrowserContext, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { PageManager } from "../page-object/pageManager";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
});

AfterAll(async function () {
  await browser.close();
});

// AfterStep(async function ({ pickle }) {
//   const img = await pageFixture.page.screenshot({
//     path: `./test-results/screenshots/${pickle.name}.png`,
//   });
//   this.attach(img, "image/png");
// });

Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
  pageFixture.pm = new PageManager(page);
});

After(async function ({pickle,result}) {
  if(result?.status == Status.FAILED){
    const img = await pageFixture.page.screenshot({
    path: `./test-result/screenshots/${pickle.name}.png`,
  });
  this.attach(img, "image/png");
}
  await pageFixture.page.close();
  await context.close();
});
