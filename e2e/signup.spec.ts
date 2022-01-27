import { test, expect } from "@playwright/test";
import { Inputs } from "../src/pages/signup";

test.describe("users signup", () => {
  const path = "/signup";
  const user: Inputs = {
    name: "",
    email: "user@invalid",
    password: "foo",
    passwordConfirmation: "bar",
  };
  test("invalid signup information", async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.ok).toBeTruthy;
  });
});
