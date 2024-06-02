import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "../src/pages/Contact";
import { describe, test, expect } from "vitest";

describe("Contact component", () => {
  test("renders the project form with all fields");
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );
  expect(screen.getByLabelText(/project name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/project email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/project phone/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/project text/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/project button/i)).toBeInTheDocument();
});
