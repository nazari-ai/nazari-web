import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { AssetInfo } from ".";

const ShoshaCoinAsa = {
    assetId: "1",
    available: true,
    logo: "https://algorand-wallet-mainnet.s3.amazonaws.com/media/asset_verification_requests_logo_svg/2022/04/30/5440fdb4a95644beb17524512a4b330a.svg",
    name: "Shosha Coin",
    unitname1: "99",
};

afterAll(cleanup);

test("renders the component correctly", async () => {
    render(<AssetInfo asset={ShoshaCoinAsa} className={"available"} handleClick={jest.fn()} />);

    expect(screen.getByText(/shosha/i)).toHaveTextContent(ShoshaCoinAsa.name);
    expect(screen.getByText(/99/i)).toHaveTextContent(ShoshaCoinAsa.unitname1);
});

test("should call handleClick successfully", async () => {
    const handleClick = jest.fn();

    render(<AssetInfo asset={ShoshaCoinAsa} className={"available"} handleClick={handleClick} />);

    fireEvent.click(screen.getByText(/shosha coin/i));

    expect(handleClick).toHaveBeenCalled();
});

test("component should be hiddden after click event", async () => {
    const handleClick = jest.fn();

    render(<AssetInfo asset={ShoshaCoinAsa} className={"available"} handleClick={handleClick} />);

    fireEvent.click(screen.getByText(/shosha coin/i));

    expect(handleClick).toHaveBeenCalled();
});

test("render compoment correctly when asset.available is set to false", async () => {
    const ShoshaCoinAsa = {
        assetId: "1",
        available: false,
        logo: "https://algorand-wallet-mainnet.s3.amazonaws.com/media/asset_verification_requests_logo_svg/2022/04/30/5440fdb4a95644beb17524512a4b330a.svg",
        name: "Shosha Coin",
        unitname1: "99",
    };

    const handleClick = jest.fn();

    render(<AssetInfo asset={ShoshaCoinAsa} className={"unavailable"} handleClick={handleClick} />);

    expect(screen.getByText(/shosha/i)).toHaveTextContent(ShoshaCoinAsa.name);
    expect(screen.getByText(/99/i)).toHaveTextContent(ShoshaCoinAsa.unitname1);
    expect(screen.getByTestId("asset-info")).toHaveClass("unavailable");

    fireEvent.click(screen.getByText(/shosha coin/i));

    expect(handleClick).toHaveBeenCalledTimes(0);
});
