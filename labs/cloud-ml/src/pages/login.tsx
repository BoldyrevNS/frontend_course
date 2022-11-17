import React from "react";
import '../css/button_default.css';
import '../css/login.css';
import HeaderCentral from "../components/headerCentral";
import { useNavigate, NavigateFunction, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from "../models/user";
import { getAuth } from "../apis/authApi";

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
    // eslint-disable-next-line
        [user]
    );


    function handleSubmit(event: any) {
        event.preventDefault()
        setError(null)
        setPressed(true)
        if (login !== '' && password !== '') {
            getAuth(setUser, setError, login, password)
        }
    };

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
            <HeaderCentral />
            <main className="container">
                <section className="login-form mb-3">
                    <div className="title">
                        <h1>Авторизация</h1>
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
                            {(isPressed && password === '') && <div className="errors">Заполните "Пароль"</div>}
                        </div>
                        {error !== null &&
                            <div className="mb-2 reg-tip">
                                <div className="errors">Неверный логин или пароль!</div>
                            </div>
                        }
                        <div className="mb-2">
                            <button type="submit" onClick={(event) => handleSubmit(event)} className="btn button-default btn-login">Войти</button>
                        </div>
                        <div className="mb-2 reg-tip">
                            <Link className='reg-link' to='/registration'>Нет аккаунта? Зарегистрируйтесь!</Link>
                        </div>
                    </form>
                </section>
            </main>
        </React.Fragment>
    );
}



export default Login;