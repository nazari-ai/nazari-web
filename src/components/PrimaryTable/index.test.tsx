import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { PrimaryTable } from ".";

test("renders component correctly", async () => {
    render(<PrimaryTable columns={[]} data={[]} />);
    expect(screen.getByTestId("primary-table")).toBeInTheDocument();
});
