import { test, expect } from "@playwright/test";

test.describe("should get about", () => {
  const path = "/about";
  test("should get about", async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.ok).toBeTruthy;
  });

  test("the title should be about", async ({ page }) => {
    await page.goto(path);
    const title = page.locator("title");
    await expect(title).toHaveText("About | Sample App");
  });
});
