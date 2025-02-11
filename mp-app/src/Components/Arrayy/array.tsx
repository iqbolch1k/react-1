import { useState } from "react";

const FruitList: React.FC = () => {
    const [fruits, setFruits] = useState<string[]>([]);

    const addFruit = () => {
        const newFruits = ["Olma", "Banan", "Nok", "Shaftoli", "Gilos"];
        const randomFruit = newFruits[Math.floor(Math.random() * newFruits.length)];
        setFruits([...fruits, randomFruit]);
    };

    return (
        <div>
            <h2>Mevalar ro‘yxati:</h2>
            {fruits.length === 0 ? (
                <p>Hech qanday meva qo‘shilmagan.</p>
            ) : (
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
            )}
            <button onClick={addFruit}>Meva qo‘shish</button>
        </div>
    );
};

export default FruitList;
