import React from "react";
import Header from "../components/Main/header";
import LoginForm from "../components/Login/login";
import Footer from "../components/Main/footer";
import 'bootstrap/dist/css/bootstrap.css';

function Login() {
    return (
        <div>
            <Header/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}

export default Login;