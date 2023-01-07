import { fireEvent, screen, render } from "@testing-library/react";
import React from "react";
import ZustandCounter from "./ZustandCounter";
import { useStore } from "./zustandStore";

const originalStore = useStore.getState();

beforeEach(() => {
    useStore.setState(originalStore);
});

test("on increment", () => {
    render(<ZustandCounter />);

    const counter = screen.getByRole("contentinfo");
    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByText(/Increment/i);
    fireEvent.click(addButton);

    expect(counter).toHaveTextContent("1");
});

test("on increment again", () => {
    render(<ZustandCounter />);

    const counter = screen.getByRole("contentinfo");
    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByText(/Increment/i);
    fireEvent.click(addButton);

    expect(counter).toHaveTextContent("1");
});
