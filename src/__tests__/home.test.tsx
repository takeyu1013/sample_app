/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

describe("Home", () => {
  it("should get Home", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: /Sample App/,
      })
    ).toBeInTheDocument();
  });
});
