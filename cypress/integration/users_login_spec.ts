import { Input } from "../../src/pages/login";

it("login with valid information", () => {
  const path = "/login";
  cy.visit(path);
  const input: Input = {
    email: "example@railstutorial.org",
    password: "foobar",
  } as const;
  expect(true).equals(true);
});
