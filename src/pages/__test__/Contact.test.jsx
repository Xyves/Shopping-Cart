import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "../Contact";
import { describe, it, expect } from "vitest";

const MockFunction = () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );
};

describe("Contact component", () => {
  it("renders the project form with all fields", async () => {
    render(<MockFunction />);
    const name = screen.getByLabelText(/project-name/);
    const email = screen.getByLabelText(/project-email/);
    const phone = screen.getByLabelText(/project-phone/);
    const text = screen.getByLabelText(/project-text/);
    const button = screen.getByLabelText(/project-button/);
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
