/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../pages/static_pages/about";

describe("About", () => {
  it("should get About", () => {
    render(<About />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
