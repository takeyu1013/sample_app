/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/static_pages/home";

describe("Home", () => {
  it("should get home", () => {
    render(<Home />);
    expect(screen.getByText("Sample App")).toBeInTheDocument();
  });
});
