import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SearchInput } from ".";

test("renders the input correctly", async () => {
    render(<SearchInput placeholder="Asalytics" />);
    const inputField = screen.getByPlaceholderText(/Asalytics/i);
    fireEvent.change(inputField, { target: { value: "Asalytics" } });
    expect(inputField).toHaveValue("Asalytics");
});

test("renders the label correctly", async () => {
    render(<SearchInput placeholder="Asalytics" label="Enter Your First Name" />);
    expect(screen.getByText(/Enter Your First Name/i)).toBeInTheDocument();
});

test("renders the error popup correctly", async () => {
    render(<SearchInput placeholder="Asalytics" error="Required" />);
    expect(screen.getByText(/Required/i)).toBeInTheDocument();
});

test("Disable Input when disable prop is passed", async () => {
    render(<SearchInput placeholder="Asalytics" disabled={true} />);
    const inputField = screen.getByPlaceholderText(/Asalytics/i);
    expect(inputField).toBeDisabled();
});
