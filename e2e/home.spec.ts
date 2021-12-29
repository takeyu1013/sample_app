import { test, expect } from "@playwright/test";

test.describe("should get home", () => {
  test("should get home", async ({ page }) => {
    const response = await page.goto("/static_pages/home");
    expect(response?.ok).toBeTruthy;
  });

  test("the title should be home", async ({ page }) => {
    await page.goto("/static_pages/home");
    const title = page.locator("title");
    await expect(title).toHaveText("Home");
  });
});
