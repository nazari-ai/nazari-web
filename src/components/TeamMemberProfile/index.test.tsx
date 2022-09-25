import React from "react";
import { render, screen } from "@testing-library/react";
import { TeamMemberProfile } from ".";

test("renders component correctly", async () => {
    render(<TeamMemberProfile name={"busayor"} role={"machine learning engineer"} image={"/images/busayor.jpg"} />);
    expect(screen.queryByText(/busayor/i)).toBeTruthy();
    expect(screen.queryByText(/machine learning/i)).toBeTruthy();
});
