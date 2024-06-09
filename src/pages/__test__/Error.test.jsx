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
    const heading = screen.getByRole("h1");
    expect(heading).toBeInTheDocument();
  });
});
