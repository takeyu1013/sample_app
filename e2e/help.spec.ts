import { test, expect } from "@playwright/test";

test.describe("should get help", () => {
  test("should get help", async ({ page }) => {
    const response = await page.goto("/static_pages/help");
    expect(response?.ok).toBeTruthy;
  });

  test("the title should be help", async ({ page }) => {
    await page.goto("/static_pages/help");
    const title = page.locator("title");
    await expect(title).toHaveText("Help");
  });
});
