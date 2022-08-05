import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { PrimaryLoader } from ".";

test("renders the component correctly", async () => {
    render(<PrimaryLoader />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
});
