import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { TimeFrame } from ".";
import { useStore } from "src/store/index";

const mockedUseStore = useStore as unknown as jest.Mock<any>;

jest.mock("src/store/index");

afterEach(() => {
    jest.clearAllMocks();
});

test("renders component correctly", async () => {
    const handleDateRangeModal = jest.fn();
    const handleTimeFrame = jest.fn();

    const dateRange = {
        startDate: "2020-01-01",
        endDate: "2022-09-25",
        activeTimeFrame: null,
    };

    mockedUseStore.mockImplementation(() => dateRange);

    render(<TimeFrame handleDateRangeModal={handleDateRangeModal} handleTimeFrame={handleTimeFrame} />);
    expect(screen.getByText(/2022-09-25/i)).toHaveTextContent("2020-01-01 ~ 2022-09-25");
    expect(screen.queryByText(/1d/i)).toBeTruthy();
    expect(screen.queryByText(/1w/i)).toBeTruthy();
    expect(screen.queryByText(/1m/i)).toBeTruthy();
});
