import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders BubblePage without errors", () => {
    render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
    // Finish this test
    render(<BubblePage />);
    expect(screen.getByText(/bubbles/i));
    await waitFor(() => {
        expect(screen.queryAllByTestId("bubble"));
    });
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
