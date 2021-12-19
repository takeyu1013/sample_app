/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/static_pages/home";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Sample App/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
