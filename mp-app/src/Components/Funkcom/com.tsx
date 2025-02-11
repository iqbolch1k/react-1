import { useState } from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h2>Hisoblagich: {count}</h2>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        </div>
    );
};

export default Counter;