import React from "react";
import { render, screen } from "@testing-library/react";
import { PrimaryEmptyState } from ".";
import MemoHomeIcon from "src/components/Icons/HomeIcon";

test("renders components correctly", async () => {
    render(<PrimaryEmptyState text={"No data for this section"} />);

    expect(screen.getByText(/No data/i)).toHaveTextContent("No data for this section");
});
