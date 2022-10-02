import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { PrimaryTableMoreButton } from ".";

test("renders component correctly", async () => {
    const handleRedditMore = jest.fn();

    render(<PrimaryTableMoreButton handleRedditMore={handleRedditMore} />);
    expect(screen.getByTestId("primary-table-more-button")).toBeInTheDocument();
});
