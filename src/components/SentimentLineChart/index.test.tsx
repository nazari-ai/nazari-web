import React from "react";
import { render, screen } from "@testing-library/react";
import { SentimentLineChart } from ".";

test("renders component correctly", async () => {
    render(<SentimentLineChart data={[]} title={"Reddit"} />);
    expect(screen.getByTestId("sentiment-line-chart")).toHaveTextContent("Reddit");
});
