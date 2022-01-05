import { test, expect } from "@playwright/test";

test("layout links", async ({ page }) => {
  await page.goto("/");
  const count = await page.locator(`a[href="/"]`).count();
  expect(count).toBe(2);
  const help = await page.locator(`a[href="/help"]`).count();
  expect(help).toBeTruthy();
  const about = await page.locator(`a[href="/about"]`).count();
  expect(about).toBeTruthy();
  const contact = await page.locator(`a[href="/contact"]`).count();
  expect(contact).toBeTruthy();
});
