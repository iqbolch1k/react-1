import { useState } from "react";

const ShoppingList: React.FC = () => {
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState<string>("");

    const addItem = () => {
        if (newItem.trim() !== "") {
            setItems([...items, newItem]);
            setNewItem("");
        }
    };

    return (
        <div>
            <h2>Shopping List</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter item..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={addItem}> Add</button>
            </div>
            <ul>
                {items.length === 0 ? (<p>No items added yet</p>) : (
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ShoppingList;
