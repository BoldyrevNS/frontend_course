import React from "react";
import "../../css/style.css";
import "../../css/aut.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';

function LoginForm() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm('service_x1pzg9p', 'template_git13wv', form.current as HTMLFormElement|string, 'haxC4LiFq_4eds4Ui')
            .then((result) => {
                console.log(result.text);
                alert("Перейдите по ссылке в почте")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <React.Fragment>
            <form ref={form} className="form_auth_style" onSubmit={(event) => sendEmail(event)}>
                <label>имя</label>
                <input type="name" name="name" placeholder="имя" required/>
                <label>имейл</label>
                <input type="email" name="email" placeholder="имейл" required/>
                <button className="aut_button">Войти</button>
            </form>
        </React.Fragment>
    );
}


export default LoginForm;