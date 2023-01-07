import { render, screen, fireEvent } from "@testing-library/react";
import ButtonWrapper from "./ButtonWrapper";

test("renders a name", () => {
    const onClick = jest.fn(); // create a mock function

    render(<ButtonWrapper onClick={onClick} title="Add Item" name="jack" />);

    const buttonElement = screen.getByText("Add Item");
    fireEvent.click(buttonElement); // this will click the button
    expect(onClick).toBeCalledTimes(1);
});
