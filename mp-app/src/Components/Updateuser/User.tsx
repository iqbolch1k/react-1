import { useState } from "react";

const UserProfile: React.FC = () => {
    const [user, setUser] = useState<{ name: string; age: number }>({
        name: "Ali",
        age: 25,
    });

    const updateUser = () => {
        setUser({ ...user, age: 26 });
    };

    return (
        <div>
            <h2>Ism: {user.name}</h2>
            <h3>Yosh: {user.age}</h3>
            <button onClick={updateUser}>Yangilash</button>
        </div>
    );
};

export default UserProfile;
