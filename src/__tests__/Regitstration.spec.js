import React, { useEffect } from "react";
import { cleanup, render, fireEvent, screen, getByText, wait, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Registration from "../Registration";
import "mutationobserver-shim";
import { ExpansionPanelActions } from "@material-ui/core";
import { act } from "react-dom/test-utils";

beforeEach(cleanup);

describe("App", () => {
  test("should display correct error message", async () => {
    const { getByTestId, getByText, findByText, debug } = render(<Registration />);

    debug(getByTestId("submit"));

    await fireEvent.click(getByTestId("submit"));

    await wait(() => debug(getByText("Required")));
    //expect(getByTestId("message").innerHTML).toEqual("Hidden message");
    //expect(findByText("This field is required")).toBeInTheDocument();
  });
});
