import React from "react";
import Person from "./Person";
import { render, screen } from "@testing-library/react";

test("renders a name", () => {
    render(<Person name="jack" />);

    // const personElement = screen.getByText(/Name is jack/i); // Select By document text
    const personElement = screen.getByRole("contentinfo"); // select by element role attribute

    expect(personElement).toBeInTheDocument(); // check element exist in document
    expect(personElement).toHaveTextContent("Name is jack"); // check if contnet has this value
    expect(personElement).toHaveAttribute("role", "contentinfo"); // check attribute role is exist and have conte tof contentinfo
});
