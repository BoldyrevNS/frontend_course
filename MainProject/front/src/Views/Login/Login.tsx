import {Link, useNavigate} from 'react-router-dom'
import internal from 'stream';
import './Login.css';
import { useState } from 'react';
import axios from 'axios';

type Props = {
    setNickName: (name: string) => void
  }

const Login:React.FC<Props> = ({setNickName}) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    function login(event: any){
        event.preventDefault();
        axios.post("http://localhost/api/user/login", {email: email, password: password}, {headers: { Authorization: `Bearer ${email}` }}).then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('name', response.data.name);
            setNickName(response.data.name);
            navigate('/hero');
        }).catch(
            error => alert("Неверный логин или пароль")
        )
    }


    return (
        <div className="login-form">
    <h1>Авторизация</h1>
    <hr/>
    <form className="mt-4" method="post" onSubmit={login} >
    <div className="mb-4">
      <div><label>Email</label></div>
      <div><input type="email" required className="w-100" name="email"
            onChange={event => setEmail(event.target.value)}/></div>
    </div>
    <div className="mb-4">
      <div><label>Пароль</label></div>
      <div><input type="password" required className="w-100" name="password"
            onChange={event => setPassword(event.target.value)}/></div>
    </div>
    <div className="mb-4">
      <button type="submit" className="btn btn-yellow">Войти</button>
    </div>
  </form>
  </div>
  )

}
export default Login;
