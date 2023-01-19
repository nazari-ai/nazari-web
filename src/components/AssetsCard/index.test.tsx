import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import AssetsCard from ".";

test("renders the component correctly", async () => {
    const data = {
        assetId: "312769",
        logo: null,
        name: "Tether USDt",
        unitname1: "Tether",
        assetTotal: 1200,
        available: true,
    };

    render(<AssetsCard assets={data} />);
    expect(screen.getByAltText("asset-img")).toBeInTheDocument();

    expect(screen.getByText(/Tether USDt/i)).toBeInTheDocument();

    expect(screen.getByText(/Tether/i)).toBeInTheDocument();
});

test("renders the component with the right link href", async () => {
    const data = {
        assetId: "312769",
        logo: null,
        name: "Tether USDt",
        unitname1: "Tether",
        assetTotal: 1200,
        available: false,
    };

    render(<AssetsCard assets={data} />);

    expect(screen.getByText("Analyze Asa")).toHaveAttribute("href", "/312769");
});

test("when the props object property 'available' is false, check if the unavailable class is added to classlist", async () => {
    const data = {
        assetId: "312769",
        logo: null,
        name: "Tether USDt",
        unitname1: "Tether",
        assetTotal: 1200,
        available: false,
    };

    render(<AssetsCard assets={data} />);

    expect(screen.getByText("Analyze Asa")).toHaveClass("unavailable");
});
