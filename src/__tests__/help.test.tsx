/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Help from "../pages/static_pages/help";

describe("Help", () => {
  it("should get Help", () => {
    render(<Help />);
    expect(
      screen.getByRole("heading", {
        name: "Help",
      })
    ).toBeInTheDocument();
  });
});
