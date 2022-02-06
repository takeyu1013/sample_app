import { test, expect, chromium } from "@playwright/test";

test.describe("login with invalid information", () => {
  const path = "/login";
  test("login with invalid information", async () => {
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
    await expect(
      page.locator("p:has-text('Invalid email/password combination')").first()
    ).toBeVisible();
    await context.close();
    await browser.close();
  });
});
