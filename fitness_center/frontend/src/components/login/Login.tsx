import {Link, NavigateFunction, useNavigate} from "react-router-dom";
import React from "react";
import {User} from "../../data/User";
import AuthApi from "../../api/AuthApi";
import './login.css'

function Login() {
    const navigate: NavigateFunction = useNavigate();
    const [login, setLogin] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [isPressed, setPressed] = React.useState<boolean>(false);
    const [user, setUser] = React.useState<User>({ token: '', refresh_token :''});
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


    function handleSubmit(event: any) {
        event.preventDefault()
        setError(null)
        setPressed(true)
        if (login !== '' && password !== '') {
            AuthApi.getAuth(setUser, setError, login, password)
        }
    }

    function handleLogin(event: any) {
        event.preventDefault()
        setLogin(event.target.value.trim())
    }

    function handlePassword(event: any) {
        event.preventDefault()
        setPassword(event.target.value.trim())
    }

    return (
        <React.Fragment>

            <main className="login">
                <section className="login-form">
                    <div className="title"> Авторизация </div>
                    <form method="post">
                        <div className="text">
                            <div><label>Логин</label></div>
                            <div><input type="text" className="text-input" name="login" required onChange={evt => handleLogin(evt)} /></div>
                            {(isPressed && login === '') && <div className="errors">заполните поле</div>}
                        </div>
                        <div className="text">
                            <div><label>Пароль</label></div>
                            <div><input type="password" className="text-input" name="password" required onChange={evt => handlePassword(evt)} /></div>
                            {(isPressed && password === '') && <div className="errors">заполните поле</div>}
                        </div>
                        {error !== null &&
                            <div className="reg-tip">
                                <div className="errors">Неверный логин или пароль!</div>
                            </div>
                        }
                        <div className="btn-container pointer-events-auto ml-8 rounded-md bg-black py-2 px-3 text-[0.9rem] font-semibold leading-5 text-white hover:bg-gray-900">
                            <button type="submit" onClick={(event) => handleSubmit(event)} className="btn button-default btn-login">Войти</button>
                        </div>
                        <div className="reg-tip">
                            <Link className='reg-link' to='/registration'>Нет аккаунта? Зарегистрируйтесь!</Link>
                        </div>
                    </form>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Login;