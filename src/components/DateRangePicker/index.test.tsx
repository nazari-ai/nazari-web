import React, { ReactNode } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { DateRangePicker } from ".";

afterEach(cleanup);

test("renders components correctly", async () => {
    const handleClick = jest.fn();
    const setRange = jest.fn();
    const onClose = jest.fn();
    const handleTimeFrame = jest.fn();

    render(
        <DateRangePicker
            isOpen={true}
            handleClick={handleClick}
            setRange={setRange}
            onClose={onClose}
            handleTimeFrame={handleTimeFrame}
            range={[]}
        />,
    );

    expect(screen.getByText(/January/i)).toHaveTextContent("January");
    expect(screen.getByTestId("close-btn")).toHaveTextContent("OK");
});

test("renders components correctly when isOpen is false", async () => {
    const handleClick = jest.fn();
    const setRange = jest.fn();
    const onClose = jest.fn();
    const handleTimeFrame = jest.fn();

    render(
        <DateRangePicker
            isOpen={false}
            handleClick={handleClick}
            setRange={setRange}
            onClose={onClose}
            handleTimeFrame={handleTimeFrame}
            range={[]}
        />,
    );

    expect(screen.queryByText(/January/i)).toBeFalsy();
    expect(screen.queryByTestId("close-btn")).toBeFalsy();
});

test("close DateRange component when onClose is click", () => {
    const handleClick = jest.fn();
    const setRange = jest.fn();
    const onClose = jest.fn();
    const handleTimeFrame = jest.fn();

    render(
        <DateRangePicker
            isOpen={true}
            handleClick={handleClick}
            setRange={setRange}
            onClose={onClose}
            handleTimeFrame={handleTimeFrame}
            range={[]}
        />,
    );

    expect(screen.getByTestId("close-btn")).toHaveTextContent("OK");

    fireEvent.click(screen.getByTestId("close-btn"));

    expect(onClose).toHaveBeenCalled();
});
