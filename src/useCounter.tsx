import React, { useState, useCallback } from "react";

const useCounter = () => {
    const [count, setCount] = useState(0);

    const increament = useCallback(() => setCount((x) => x + 1), []);

    return { count, increament };
};

export default useCounter;
