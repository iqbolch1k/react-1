import { useState } from "react";

const Couter: React.FC = () => {
    const [num, setNum] = useState<number>(0)
    return (
        <div>
            <h1>Hisob:{num}</h1>
            <div>
                <button onClick={(() => setNum((sum) => sum + 1))}>+</button>
                <button onClick={(() => setNum((sum) => sum - 1))}>-</button>
                <button onClick={() => setNum(0)}>Reset</button>
            </div>
            <hr />
        </div>
    );
}
export default Couter