import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderHook, act, waitFor } from "@testing-library/react";
import useApi from "./useApi";

const server = setupServer(
    rest.get("/api", (req, res, ctx) => {
        return res(ctx.json({ name: "Jack" }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders a name", async () => {
    // Teting Custom Hooks
    const { result, rerender } = renderHook(() => useApi());

    result.current?.name;
    rerender();

    await waitFor(() => {
        // expect(result.current?.name).toBe("Jack"); // Exact Result
        expect(result.current).toEqual({ name: "Jack" }); // Check By The Object
    });
});
