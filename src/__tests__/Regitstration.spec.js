import React, { useEffect } from "react";
import {
  render,
  fireEvent,
  screen,
  getByText,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Registration from "../Registration";
import "mutationobserver-shim";
import { ExpansionPanelActions } from "@material-ui/core";

describe("Registration", () => {
  test("Check all the fileds are available in the document", () => {
    const { getByText } = render(<Registration />);
    const fields = ["Name", "Email", "Password", "Confirm Password"];
    fields.forEach((item) => {
      expect(getByText(`${item}`)).toBeInTheDocument();
    });
  });

  test("Name filed should show validation error and no error when on correct value", async () => {
    const { getByText, container, debug } = render(<Registration />);
    expect(getByText(/Name/i)).toBeInTheDocument();
    await userEvent.click(getByText(/Name/i));
    //await userEvent.type(getByText(/Name/i), "TEST");
    await userEvent.tab();
    await waitFor(() => debug(getByText(/Required/i)));
    await userEvent.click(getByText(/Email/i));
    //fireEvent.change(getByText(/Name/i), { target: { value: " s " } });
  });
});
