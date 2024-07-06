
import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counterButton"onClick={decrement}>decrement</button>
            <button className="counterButton" onClick={reset}>reset</button>
            <button className="counterButton" onClick={increment}>increment</button>
        </div>
    )
}
export default Counter;
