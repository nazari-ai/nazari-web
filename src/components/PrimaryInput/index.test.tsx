import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { PrimaryInput } from ".";

test("renders the input correctly", async () => {
    render(<PrimaryInput placeholder="Nazari" />);
    const inputField = screen.getByPlaceholderText(/Nazari/i);
    fireEvent.change(inputField, { target: { value: "Nazari" } });
    expect(inputField).toHaveValue("Nazari");
});

test("renders the label correctly", async () => {
    render(<PrimaryInput placeholder="Nazari" label="Enter Your First Name" />);
    expect(screen.getByText(/Enter Your First Name/i)).toBeInTheDocument();
});

test("renders the error popup correctly", async () => {
    render(<PrimaryInput placeholder="Nazari" error="Required" />);
    expect(screen.getByText(/Required/i)).toBeInTheDocument();
});

test("Disable Input when disable prop is passed", async () => {
    render(<PrimaryInput placeholder="Nazari" disabled={true} />);
    const inputField = screen.getByPlaceholderText(/Nazari/i);
    expect(inputField).toBeDisabled();
});
