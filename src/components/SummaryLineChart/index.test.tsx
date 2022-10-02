import React from "react";
import { render, screen } from "@testing-library/react";
import { SummaryLineChart } from ".";

test("renders component correctly", async () => {
    render(<SummaryLineChart data={[]} title={"Reddit"} />);
    expect(screen.queryByText(/Reddit/i)).toBeTruthy();
});
