import React, { ReactNode } from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { DashboardLink } from ".";
import MemoHomeIcon from "src/components/Icons/HomeIcon";

interface Props {
    children: ReactNode;
}

jest.mock("next/link", () => {
    return ({ children }: Props) => {
        return children;
    };
});

test("renders components correctly", async () => {
    render(<DashboardLink href={"/297995609/twitter"} title={"Twitter"} icon={<MemoHomeIcon />} />);
    expect(screen.getByText(/Twitter/i)).toHaveTextContent("Twitter");
    expect(screen.getByTestId("memo-home-icon")).toBeInTheDocument();
});

// test("check if link redirect correctly", async () => {
//     render(<DashboardLink href={"/297995609/twitter"} title={"Twitter"} icon={<MemoHomeIcon />} />);
//     screen.debug();
//     fireEvent.click(screen.getByText(/Twitter/i))

//     expect(await screen.findByText(/Overview/i)).toBeInTheDocument()
//     // expect(screen.getByText(/Twitter/i)).toHaveAttribute("href", "/297995609/twitter");
// });

test("when the props className is passed, it is added to element CSS classList", async () => {
    render(<DashboardLink href={"/297995609/twitter"} title={"Twitter"} className="test" />);
    expect(screen.getByText(/Twitter/i)).toHaveClass("test");
});
