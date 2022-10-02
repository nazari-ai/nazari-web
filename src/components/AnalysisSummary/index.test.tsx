import React from "react";
import { render, screen } from "@testing-library/react";
import { AnalysisSummary } from ".";

test("renders the component correctly", async () => {
    render(<AnalysisSummary header={"Watches"} info={"2339"} />);
    expect(screen.getByTestId("analysis-summary")).toHaveTextContent("Watches");
    expect(screen.getByTestId("analysis-summary")).toHaveTextContent("2339");
});
