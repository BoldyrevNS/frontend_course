import React, { useEffect } from 'react';
import { useNavigate, NavigateFunction} from "react-router-dom";

const Buff = () =>  {

    const navigate: NavigateFunction = useNavigate();

    useEffect( () =>{
        navigate("/")
    }, [navigate])
    
return (
    <div></div>
)
}

export default Buff;