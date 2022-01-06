import { test, expect } from "@playwright/test";

test("should get new", async ({ page }) => {
  const path = "/signup";
  const response = await page.goto(path);
  expect(response?.ok).toBeTruthy;
});
