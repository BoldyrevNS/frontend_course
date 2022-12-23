import '../../css/login.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const LoginForm = () => {
    return (
        <div>
            <h1>Авторизация</h1>
            <form action="" noValidate>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email адрес</label>
                    <input type="email" className="form-control js-input js-input-email" id="exampleInputEmail1" name="email"
                           placeholder="Email" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">Мы никогда не передадим вашу электронную почту кому-либо еще
                        </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                    <input type="password" className="form-control js-input js-input-password" id="exampleInputPassword1"
                           name="password" placeholder="Password"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input js-input-checkbox" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Сохранить пароль</label>
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
            </form>
        </div>
    )
}
export default LoginForm

