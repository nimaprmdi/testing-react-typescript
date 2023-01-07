import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders a name", () => {
    const onClick = jest.fn();

    render(<Counter />);

    const divElement = screen.getByRole("contentinfo");

    const buttonElement = screen.getByText("Add One");
    fireEvent.click(buttonElement);

    expect(divElement).toHaveTextContent("Count is 1");
});
