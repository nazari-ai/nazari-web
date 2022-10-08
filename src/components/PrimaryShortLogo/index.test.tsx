import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { PrimaryShortLogo } from ".";

test("renders the component correctly", async () => {
    render(<PrimaryShortLogo />);
    expect(screen.getByAltText("Nazari Logo")).toBeInTheDocument();
});
