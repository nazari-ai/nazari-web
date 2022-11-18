import React from "react";
import { render, screen } from "@testing-library/react";
import { CustomTooltip } from ".";

test("renders the component correctly", async () => {
    render(<CustomTooltip active={true} payload={[{ value: 120 }]} label={"Monday"} />);

    expect(screen.getByText(/Monday/i)).toBeInTheDocument();

    expect(screen.getByText(/120/i)).toBeInTheDocument();
});

test("renders no html when active prop is false", async () => {
    render(<CustomTooltip active={false} payload={[{ value: 120 }]} label={"Monday"} />);

    expect(screen.queryByText(/Monday/i)).not.toBeInTheDocument();
});
