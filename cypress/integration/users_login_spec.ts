import { Input } from "../../src/pages/login";

it("login with valid information", () => {
  const path = "/login";
  cy.visit(path);
  const input: Input = {
    email: "example@railstutorial.org",
    password: "foobar",
  } as const;
  cy.get("input").eq(0).type(input.email);
  cy.get("input").eq(1).type(input.password);
  cy.get("form").submit();
  cy.get(`a[href*="${path}"]`).should("not.exist");
  cy.get("button").contains("Account").click();
  cy.get("button").contains("Log out").should("exist");
  const userPath = "/users";
  cy.get(`a[href*="${userPath}"]`).should("exist");
});
