import { test, expect, chromium } from "@playwright/test";

test("login with invalid information", async () => {
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
  await page.locator("input").nth(1).fill("aaaaaa");
  await page.click('input[type="submit"]');
  const error = "Invalid email/password combination";
  await expect(page.locator(`p:has-text('${error}')`).first()).toBeVisible();
  await page.goto("/");
  await expect(page.locator("p")).not.toHaveText(error);
  await context.close();
  await browser.close();
});
