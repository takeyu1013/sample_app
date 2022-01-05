import { test, expect } from "@playwright/test";

test.describe("should get contact", () => {
  const path = "/contact";
  test("should get home", async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.ok).toBeTruthy;
  });

  test("the title should be home", async ({ page }) => {
    await page.goto(path);
    const title = page.locator("title");
    await expect(title).toHaveText("Contact | Sample App");
  });
});
