import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header.jsx";
import { MemoryRouter } from "react-router-dom";
describe("Navbar", () => {
  it("Renders a navbar", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const headerElement = screen.getByTestId("main-header");
    expect(headerElement).toBeInTheDocument();
  });
});
