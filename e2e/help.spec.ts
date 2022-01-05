import { test, expect } from "@playwright/test";

test.describe("should get help", () => {
  const path = "/help";
  test("should get help", async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.ok).toBeTruthy;
  });

  test("the title should be help", async ({ page }) => {
    await page.goto(path);
    const title = page.locator("title");
    await expect(title).toHaveText("Help | Sample App");
  });
});
