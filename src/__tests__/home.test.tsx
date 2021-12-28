/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Home from "../pages/static_pages/home";

describe("Home", () => {
  it("should get Home", () => {
    const { debug } = render(<Home />);
    debug();
    expect(
      screen.getByRole("heading", {
        name: "Sample App",
      })
    ).toBeInTheDocument();
  });
});
