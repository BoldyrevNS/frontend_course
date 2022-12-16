import React from "react";
import LoginForm from "../components/Login/LoginForm";

function Login() {
    return (
        <React.Fragment>
            <div>
                <div className="form_auth_block" >
                    <div className="form_auth_block_content">
                        <p className="form_auth_block_head_text">Вход</p>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;