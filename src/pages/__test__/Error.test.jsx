import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Error from "../ErrorPage";
import { describe, it, expect } from "vitest";

const MockFunction = () => {
  render(
    <MemoryRouter>
      <Error />
    </MemoryRouter>
  );
};

describe("Error page", () => {
  it("renders the error page", async () => {
    render(<MockFunction />);
    const heading = screen.getAllByRole("heading", { level: 1 })[0];
    const heading2 = screen.getAllByRole("heading", { level: 2 })[0];
    const heading3 = screen.getAllByRole("heading", { level: 3 })[0];
    console.log(heading);
    expect(heading).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    expect(heading3).toBeInTheDocument();
  });
});
