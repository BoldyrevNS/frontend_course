import React from "react";
import '../css/button_default.css';
import '../css/unlogin.css';
import { useNavigate, NavigateFunction } from "react-router-dom";

function UnLoginButton() {
    const navigate:NavigateFunction = useNavigate();

    function HandleMouseEvent(){
        navigate('/login');
        localStorage.setItem('token', '');
        localStorage.setItem('refresh_token', '');
    };

    return (
        <React.Fragment>
            <div className="col-md-6 col-lg-4 mb-4">
                <button type="submit" onClick = {() =>HandleMouseEvent()} className="btn button-default btn-unlogin">Выйти</button>
            </div>
        </React.Fragment>
    );
}

export default  UnLoginButton;