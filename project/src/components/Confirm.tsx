import React from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

function Confirm() {
    const navigate:NavigateFunction = useNavigate();

    React.useEffect(() => {
            localStorage.setItem('token', "token");
            navigate('/')

        },
        []
    );

    return (
        <React.Fragment>
        </React.Fragment>
    );
}

export default Confirm;