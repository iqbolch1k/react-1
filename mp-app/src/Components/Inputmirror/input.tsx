import { useState } from "react";

const Mirror: React.FC = () => {
    const [real, setReal] = useState<string>("")
    return (
        <div>
            <h1>{real || 'Type something...'}</h1>
            <input value={real} type="text" onChange={(e) => setReal(e.target.value)} />
            <hr />
        </div>
    );
}
export default Mirror
