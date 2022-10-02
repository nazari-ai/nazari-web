import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { DashboardSubLink } from ".";

interface Props {
    children: ReactNode;
}

jest.mock("next/link", () => {
    return ({ children }: Props) => {
        return children;
    };
});

test("renders components correctly", async () => {
    render(<DashboardSubLink href={"/297995609/twitter"} title={"Twitter"} />);
    expect(screen.getByText(/Twitter/i)).toHaveTextContent("Twitter");
});

// test("check if link redirect correctly", async () => {
//     render(<DashboardSubLink href={"/297995609/twitter"} title={"Twitter"} />);
//     screen.debug();
//     fireEvent.click(screen.getByText(/Twitter/i))

//     expect(await screen.findByText(/Overview/i)).toBeInTheDocument()
//     // expect(screen.getByText(/Twitter/i)).toHaveAttribute("href", "/297995609/twitter");
// });

test("when the props className is passed, it is added to element CSS classList", async () => {
    render(<DashboardSubLink href={"/297995609/twitter"} title={"Twitter"} className="test" />);
    expect(screen.getByText(/Twitter/i)).toHaveClass("test");
});
