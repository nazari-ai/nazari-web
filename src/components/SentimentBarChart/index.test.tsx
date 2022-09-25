import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SentimentBarChart } from ".";

test("renders component correctly", async () => {
    render(<SentimentBarChart data={[]} title="Sentiment score" />);
    expect(screen.getByText(/Sentiment/i)).toHaveTextContent("Sentiment score");
});
