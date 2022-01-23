/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import About from "../pages/about";

describe("About", () => {
  it("should get About", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", {
        name: "About",
      })
    ).toBeInTheDocument();
  });
});
