import Counter from "./Counter";
import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

test("should increament", () => {
    // Teting Custom Hooks
    const { result } = renderHook(() => useCounter());

    act(() => {
        result.current.increament();
    });

    expect(result.current.count).toBe(1);
});
