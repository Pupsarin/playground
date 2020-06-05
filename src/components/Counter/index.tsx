import React from "react";

export const Counter: React.FC = () => {
    const [value, setValue] = React.useState(0);
    const double = () => {
        // const sum = [1,2,3].reduce((acc, val) => acc + val);
        setValue(value * 2)
    };

    return (
        <div className="counter-box">
            <h4>Counter: {value}</h4>
            <button data-testId="increment-button" onClick={() => setValue(value + 1)}>Increment</button>
            <button data-testId="decrement-button" onClick={() => setValue(value - 1)}>Decrement</button>
            <button data-testId="double-button" onClick={double}>show six</button>
        </div>
)
}
