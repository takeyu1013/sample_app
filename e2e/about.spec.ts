import { test, expect } from "@playwright/test";

test.describe("should get about", () => {
  test("should get about", async ({ page }) => {
    const response = await page.goto("/static_pages/about");
    expect(response?.ok).toBeTruthy;
  });

  test("the title should be about", async ({ page }) => {
    await page.goto("/static_pages/about");
    const title = page.locator("title");
    await expect(title).toHaveText("About");
  });
});
