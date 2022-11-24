import { useNavigate, NavigateFunction } from "react-router-dom";
import accContext from "../authContext";
import React from 'react';


function ExitButton (){
    const navigate:NavigateFunction = useNavigate();
    const isLogin = React.useContext(accContext);

    function exitAcc (){
        navigate('/');
        isLogin!.setAuth(false)
        return undefined
    };

    return(
        <button onClick={() =>exitAcc()}  type="submit"className="btn btn-outline-secondary" >Выход</button>

    );
}

export default ExitButton;

