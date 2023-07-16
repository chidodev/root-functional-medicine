/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from "@testing-library/react";
import Login from "../src/components/Login";

describe("Login", () => {
  it("should render the Submit button", () => {
    const { getByText } = render(<Login close={() => {}} />);
    expect(getByText("Submit")).toBeInTheDocument();
  });
  it("should contain inputs", () => {
    // get element by role
    const { getByRole } = render(<Login close={() => {}} />);
    // get all inputs
    const inputs = getByRole("form").querySelectorAll("input");
    // check if inputs are present
    expect(inputs.length).toBeGreaterThan(0);
  });
});
