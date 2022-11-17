import React from "react";
import '../css/button_default.css';
import '../css/registration.css';
import HeaderCentral from "../components/headerCentral";
import { useNavigate, NavigateFunction } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { postAuth } from "../apis/authApi";
import { User } from "../models/user";

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
    // eslint-disable-next-line
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
            postAuth(setUser, setError, login, password)
        }
    };

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
            <HeaderCentral />
            <main className="container">
                <section className="reg-form mb-3">
                    <div className="title">
                        <h1>Регистрация</h1>
                    </div>
                    <form className="mt-4" method="post">
                        <div className="mb-4">
                            <div><label>Логин</label></div>
                            <div><input type="text" className="w-100" name="login" required onChange={evt => handleLogin(evt)} /></div>
                            {(isPressed && login === '') && <div className="errors">Заполните "Логин"</div>}
                        </div>
                        <div className="mb-4">
                            <div><label>Пароль</label></div>
                            <div><input type="password" className="w-100" name="password" required onChange={evt => handlePassword(evt)} /></div>
                            {(isPressed && password === '') && <div className="errors">Введите пароль</div>}
                        </div>
                        <div className="mb-4">
                            <div><label>Повторите пароль</label></div>
                            <div><input type="password" className="w-100" name="password-copy" required onChange={evt => setPasswordCopy(evt.target.value)} /></div>
                            {(isPressed && password === '') && <div className="errors">Повторите пароль</div>}
                            {(password !== passwordCopy) && <div className="errors">Пароли не совпадают</div>}
                        </div>
                        {error !== null &&
                            <div className="mb-2 reg-tip">
                                <div className="errors">Что-то пошло не так!</div>
                            </div>
                        }
                        <div className="mb-4">
                            <button type="submit" onClick={(event)=>handleSubmit(event)} className="btn button-default btn-reg">Зарегистрироваться</button>
                        </div>
                    </form>
                </section>
            </main>
        </React.Fragment>
    );
}



export default  Registration;