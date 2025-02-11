import { useState } from 'react';
import './changer.css'
const Changer: React.FC = () => {
    const [clr, setClr] = useState<string>('red');
    const getRandomColor = (): string => {
        const letters = '0123456789ABCDEF';
        let colors = '#'
        for (let i = 0; i < 6; i++) {
            colors += letters[Math.floor(Math.random() * 16)]
        }
        return colors;
        
    };
    const changeBackground = () =>{
        setClr(getRandomColor());
    }
    return (
        <div className="bg-color" style={{ backgroundColor: clr }}>
            <button onClick={changeBackground}>update</button>
        </div>
    );
}
export default Changer