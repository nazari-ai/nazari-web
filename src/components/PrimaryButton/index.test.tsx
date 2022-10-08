import React from "react";
import { render, screen } from "@testing-library/react";
import { PrimaryButton } from ".";

test("renders a button correctly", async () => {
    render(<PrimaryButton type="button" text="Welcome to Nazari" />);
    expect(screen.getByTestId("primary-button")).toHaveTextContent("Welcome to Nazari");
});

test("when the props data disabled  true, the button becomes disabled", async () => {
    render(<PrimaryButton type="button" text="Welcome to Nazari" disabled={true} />);
    expect(screen.getByTestId("primary-button")).toBeDisabled();
});

test("when the props isLoading is true,loader is displayed and button is disabled", async () => {
    render(<PrimaryButton type="button" text="Welcome to Nazari" isLoading={true} />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
});

test("when the props className is passed, it is added to element CSS classList", async () => {
    render(<PrimaryButton type="button" text="Welcome to Nazari" className="secondaryButton" />);

    expect(screen.getByTestId("primary-button")).toHaveClass("secondaryButton");
});
