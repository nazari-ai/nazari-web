import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { useAsaDataQuery } from "src/generated/graphql";
import { AssetInformation } from ".";

const mockedUseAsaDataQuery = useAsaDataQuery as unknown as jest.Mock<any>;

jest.mock("src/generated/graphql");

afterEach(() => {
    jest.clearAllMocks();
});

test("renders the component correctly", async () => {
    const data = {
        asaData: {
            result: [
                {
                    assetId: "312769",
                    logo: "https://logo.png",
                    name: "Tether USDt",
                    reputation_Pera: "trusted",
                },
            ],
        },
    };

    mockedUseAsaDataQuery.mockImplementation(() => ({ data }));

    render(<AssetInformation />);
    expect(screen.getByTestId("asset-information")).toHaveTextContent(data.asaData.result[0].name);

    expect(screen.queryByAltText(/Asset Logo/i)).toBeTruthy();
});

test("check to see if no image was render since logo is null", async () => {
    const data = {
        asaData: {
            result: [
                {
                    assetId: "312769",
                    logo: null,
                    name: "Tether USDt",
                    reputation_Pera: "trusted",
                },
            ],
        },
    };

    mockedUseAsaDataQuery.mockImplementation(() => ({ data }));

    render(<AssetInformation />);
    expect(screen.getByTestId("asset-information")).toHaveTextContent(data.asaData.result[0].name);

    expect(screen.getByTestId("asset-information")).toHaveTextContent("TE");

    expect(screen.queryByAltText(/Asset Logo/i)).toBeNull();
});
