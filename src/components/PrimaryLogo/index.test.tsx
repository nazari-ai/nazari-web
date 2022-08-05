import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { PrimaryLogo } from ".";

test("renders the component correctly", async () => {
    render(<PrimaryLogo />);
    expect(screen.getByTestId("primary-logo")).toBeInTheDocument();
});
