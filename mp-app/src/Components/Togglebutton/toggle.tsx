import { useState } from "react";

const Buttonal: React.FC = () =>{
    const [str,setStr] = useState<string>("off")
    function Str(){
        if(str == 'off'){
            setStr('on')
        }else{
            setStr('off')
        }
    }
    return(
        <div>
            <button style={{padding:'5px 20px', fontSize:"20px"}} onClick={Str}>{str}</button><hr />
        </div>
    );
}

export default Buttonal