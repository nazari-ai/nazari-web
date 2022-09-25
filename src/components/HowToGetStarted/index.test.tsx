import React from "react";
import { render, screen } from "@testing-library/react";
import { HowToGetStarted } from ".";
import MemoHomeIcon from "src/components/Icons/HomeIcon";

test("renders components correctly", async () => {
    render(
        <HowToGetStarted
            title={"Analyze ASA based on Social Sentiments"}
            text={"Analyze your assets across multiple social media."}
            icon={<MemoHomeIcon />}
        />,
    );

    expect(screen.getByText(/Analyze ASA/i)).toHaveTextContent("Analyze ASA based on Social Sentiments");
    expect(screen.getByText(/Analyze your/i)).toHaveTextContent("Analyze your assets across multiple social media.");
    expect(screen.getByTestId("memo-home-icon")).toBeInTheDocument();
});
