import React from "react";
import { render, screen } from "@testing-library/react";
import { AssetFinancial } from ".";

test("renders the component correctly", async () => {
    render(<AssetFinancial header={"Reputation"} info={"200"} />);
    expect(screen.getByTestId("asset-financial")).toHaveTextContent("Reputation");
    expect(screen.getByTestId("asset-financial")).toHaveTextContent("200");
});
