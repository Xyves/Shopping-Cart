import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../Home";
import { describe, it, expect } from "vitest";

const MockFunction = () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
};

describe("Home page", () => {
  it("renders the home page", async () => {
    render(<MockFunction />);
    const heading = screen.getAllByRole("heading", {
      level: 1,
      value: "Electro",
    })[0];
    const heading2 = screen.getAllByRole("heading", {
      level: 2,
      value: "Shop Smarter, Not Harder",
    })[0];
    expect(heading).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
  });
});
