/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Help from "../pages/help";

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
