import { useState } from "react";
const NameToggle: React.FC = () => {
    const [name, setName] = useState<string>('Ali');
    const toggleName = () => {
        setName((prevName) => (prevName === 'Ali' ? 'Vali' : 'Ali'));
    };
    return (
        <div>
            <h1>Ism: {name}</h1>
            <button onClick={toggleName}>Alishtirish</button>
        </div>
    );
};      
export default NameToggle;
