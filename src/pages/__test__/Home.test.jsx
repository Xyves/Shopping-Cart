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
    const heading = screen.getByRole("h1");
    expect(heading).toBeInTheDocument();
  });
});
