import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "../Contact";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

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
    const nameInput = screen.getAllByTestId("project-name-input")[0];
    console.log(nameInput);
    await userEvent.type(nameInput, "Mark Twain");

    const emailInput = screen.getAllByTestId("project-email-input")[0];
    await userEvent.type(emailInput, "JaneDoe@proton.me");

    const phoneInput = screen.getAllByTestId("project-phone-input")[0];
    await userEvent.type(phoneInput, "849201753");

    const textInput = screen.getAllByTestId("project-text-input")[0];
    await userEvent.type(textInput, "We are testing this text input");

    expect(nameInput).toHaveValue("Mark Twain");
    expect(emailInput).toHaveValue("JaneDoe@proton.me");
    expect(phoneInput).toHaveValue(849201753);
    expect(textInput).toHaveValue("We are testing this text input");
    screen.debug();
  });
});
