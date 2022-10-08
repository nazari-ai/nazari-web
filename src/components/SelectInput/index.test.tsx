import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SelectInput } from ".";

test("renders the input correctly", async () => {
    const handleChange = jest.fn();

    render(<SelectInput options={["select", "test1", "test2"]} handleChange={handleChange} />);
    const selectField = screen.getByTestId("select-input");
    fireEvent.change(selectField, { target: { value: "test1" } });
    expect(selectField).toHaveValue("test1");
});
