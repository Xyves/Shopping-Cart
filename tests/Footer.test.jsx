import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../src/components/Footer.jsx";
import { MemoryRouter } from "react-router-dom";
describe("Navbar", () => {
  it("Renders a navbar", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const footerElement = screen.getByTestId("main-footer");
    expect(footerElement).toBeInTheDocument();
  });
});
