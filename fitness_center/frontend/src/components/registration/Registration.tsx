import React from "react";

import { useNavigate, NavigateFunction } from "react-router-dom";
import {User} from "../../data/User";
import AuthApi from "../../api/AuthApi";
import './registration.css'

function Registration() {
    const navigate:NavigateFunction = useNavigate();
    const [login, setLogin] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [passwordCopy, setPasswordCopy] = React.useState<string>('');
    const [isPressed, setPressed] =  React.useState<boolean>(false);
    const [user, setUser] = React.useState<User>({ token: '', refresh_token:'' });
    const [error, setError] = React.useState<string | null>(null);
    React.useEffect(() => {
            if(user.token === ''){
                return;
            }
            localStorage.setItem('token', user.token);
            localStorage.setItem('refresh_token', user.refresh_token);
            navigate('/profile')

        },
        [user]
    );

    React.useEffect(() => {
            if(error === null){
                return;
            }
            alert(error)

        },
        [error]
    );


    function handleSubmit(event: any) {
        event.preventDefault()
        setError(null)
        setPressed(true)
        if(password !== passwordCopy){
            alert('Пароли должны совпадать!')
        }
        if (login !== '' && password !== '') {
            AuthApi.postAuth(setUser, setError, login, password)
        }
    }

    function handleLogin(event: any){
        event.preventDefault()
        setLogin(event.target.value.trim())
    }

    function handlePassword(event: any){
        event.preventDefault()
        let value = event.target.value.trim()
        if (event.target.name === 'password') {
            setPassword(value)
        } else {
            setPasswordCopy(value)
        }
    }

    return (
        <React.Fragment>
            <main className="registration">
                <section className="reg-form">
                    <div className="title">
                        <h1>Регистрация</h1>
                    </div>
                    <form method="post">
                        <div className="text">
                            <div><label>Логин</label></div>
                            <div><input type="text" className="text-input" name="login" required onChange={evt => handleLogin(evt)} /></div>
                            {(isPressed && login === '') && <div className="errors">заполните поле</div>}
                        </div>
                        <div className="text">
                            <div><label>Пароль</label></div>
                            <div><input type="password" className="text-input" name="password" required onChange={evt => handlePassword(evt)} /></div>
                            {(isPressed && password === '') && <div className="errors">введите пароль</div>}
                        </div>
                        <div className="text">
                            <div><label>Повторите пароль</label></div>
                            <div><input type="password" className="text-input" name="password-copy" required onChange={evt => setPasswordCopy(evt.target.value)} /></div>
                            {(isPressed && password === '') && <div className="errors">повторите пароль</div>}
                            {(password !== passwordCopy) && <div className="errors">пароли не совпадают</div>}
                        </div>
                        {error !== null &&
                            <div className="reg-tip">
                                <div className="errors">Что-то пошло не так!</div>
                            </div>
                        }
                        <div className="btn-container pointer-events-auto ml-8 rounded-md bg-black py-2 px-3 text-[0.9rem] font-semibold leading-5 text-white hover:bg-gray-900">
                            <button type="submit" onClick={(event)=>handleSubmit(event)} className="btn button-default btn-reg">Зарегистрироваться</button>
                        </div>
                    </form>
                </section>
            </main>
        </React.Fragment>
    );
}



export default  Registration;