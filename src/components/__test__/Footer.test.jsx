import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer.jsx";
import { MemoryRouter } from "react-router-dom";
describe("Navbar", () => {
  it("Renders a footer", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const footerElement = screen.getByTestId("main-footer");
    expect(footerElement).toBeInTheDocument();
  });
});
