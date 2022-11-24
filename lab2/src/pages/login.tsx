import React from 'react';
import '../css/login.css';
import authContext from "../authContext";
import { useNavigate, NavigateFunction} from "react-router-dom";

function Login() {

    const navigate: NavigateFunction = useNavigate();
    const [login, setLogin] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [isPressed, setPressed] = React.useState<boolean>(false);
    const aсс_context = React.useContext(authContext);


    function handleSubmit(event: any) {
        event.preventDefault()
        setPressed(true)
        
        
        if (login !== '' && password !== '') {
            aсс_context!.setAuth(true);
            navigate('/')
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
    <div className="login-form">
    <h1>Авторизация</h1>
    <hr />
    <form className="mt-4" >
        <div className="mb-4">
            <div><label>Email</label></div>
            <div><input type="text" className="w-100" name="email" required onChange={evt => handleLogin(evt)}  /></div>
            {(isPressed && login === '') && <div className="errors">Заполните "Логин"</div>}
        </div>
        <div className="mb-4">
            <div><label>Пароль</label></div>
            <div><input type="text" className="w-100" name="password" required onChange={evt => handlePassword(evt)} /></div>
            {(isPressed && password === '') && <div className="errors">Заполните "Пароль"</div>}
        </div>
        <div className="mb-4">
            <button type="submit" className="btn btn-primary w-100"  onClick={(event) => handleSubmit(event)} >Войти</button>
        </div>
  </form>
  </div>

)
}

export default Login;