import React from "react";
import { render, screen } from "@testing-library/react";
import { SummaryBarChart } from ".";

test("renders component correctly", async () => {
    render(<SummaryBarChart data={[]} header={"Test header"} />);
    expect(screen.getByText(/Test header/i)).toBeTruthy();
});
