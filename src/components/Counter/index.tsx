import React, { useState } from "react";

export const Counter: React.FC = () => {
    const [value, setValue] = useState(0);

    const increment = () => setValue(s => ++s);
    const decrement = () => setValue(s => --s);

    return (
        <div className="counter-box">
            <h4>Counter: <span data-testId="component-counter-value">{value}</span></h4>
            <button data-testId="component-counter-increment" onClick={increment}>Increment</button>
            <button data-testId="component-counter-decrement" onClick={decrement}>Decrement</button>
        </div>
)
}
