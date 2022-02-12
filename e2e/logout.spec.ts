import { test, expect, chromium } from "@playwright/test";

test("logout with valid information", async () => {
  const path = "/login";
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: {
      dir: "videos/",
    },
  });
  const page = await context.newPage();
  const login = await page.goto(path);
  expect(login?.ok).toBeTruthy;
  await page.locator("input").first().fill("example@railstutorial.org");
  await page.locator("input").nth(1).fill("foobar");
  await page.click(`input[type="submit"]`);
  await page.locator(`text=Account`).click();
  await page.locator(`text=Log out`).click();
  await expect(page).toHaveURL("http://localhost:3000");
  await context.close();
  await browser.close();
});
