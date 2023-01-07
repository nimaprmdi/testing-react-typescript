import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import { ReduxCounter } from "./ReduxCounter";
import { Provider } from "react-redux";
import { store, createStore } from "./store";

/**
 *
 *  This code will work but since the store is globaly set
 *  the next text will fail
 *
 *  Example:
 *  Test1 => expect(counter is 0) => Result(counter is 0)
 *  Test2 => expect(counter is 0) => Result(counter is 1)
 *
 *  ==========  BUT  ============
 *
 *  With createStore() we can createStore from scratch
 *
 *  Test1 => expect(counter is 0) => Result(counter is 0)
 *  Test2 => expect(counter is 0) => Result(counter is 0)
 *
 *
 *   Example Code:
 *   // test("Increment", () => {
 *   //     render(
 *   //         <Provider store={store}>
 *   //             <ReduxCounter />
 *   //         </Provider>
 *   //     );
 *
 *   //     const counter = screen.getByRole("contentinfo");
 *
 *   //     expect(counter).toHaveTextContent("0");
 *
 *   //     const addButton = screen.getByText(/Increment/i);
 *   //     fireEvent.click(addButton);
 *
 *   //     expect(counter).toHaveTextContent("1");
 *   // });
 *
 *
 */

test("Increment", () => {
    render(
        <Provider store={createStore()}>
            <ReduxCounter />
        </Provider>
    );

    const counter = screen.getByRole("contentinfo");

    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByText(/Increment/i);
    fireEvent.click(addButton);

    expect(counter).toHaveTextContent("1");
});

test("Increment Again", () => {
    render(
        <Provider store={createStore()}>
            <ReduxCounter />
        </Provider>
    );

    const counter = screen.getByRole("contentinfo");

    expect(counter).toHaveTextContent("0");

    const addButton = screen.getByText(/Increment/i);
    fireEvent.click(addButton);

    expect(counter).toHaveTextContent("1");
});
