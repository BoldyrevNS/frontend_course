import {FC, useRef} from "react";
import { Link } from "react-router-dom";
import {toast, ToastContainer, ToastContent} from "react-toastify";
import {loginUser} from "../../redux/features/auth/AuthSlice";
import {useDispatch, useSelector} from "react-redux";
import User from "../../types/User";
import {useAppDispatch} from "../../hooks";

const LoginView:FC = () => {

    const dispatch = useAppDispatch()
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    async function login(): Promise<void> {

        if (null!==passwordRef.current && null!==emailRef.current){

            if (emailRef.current?.value === '' || passwordRef.current?.value.length < 4) {

                toast('поля не заполнены')

            } else {

                const user:User ={
                    email:emailRef.current.value,
                    password: passwordRef.current.value,
                }

                const result = await dispatch(loginUser(user))

                if (result.payload){
                    await toast(`${result.payload}`)
                }
            }
        }


    }

    return <div className={'login-body'} >
        <div className="login-login-block">
            <div>
                <h1 className="login-hello-text ">С возвращением!</h1>
                <div className="login-glad-to-see-text">
                    Мы так рады видеть вас снова!
                </div>
            </div>

            <div>
                <div>
                    <label className={'login-label'} htmlFor="email">
                        АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ ИЛИ НОМЕР ТЕЛЕФОНА
                        <span className={'login-span'}>*</span>
                    </label>
                    <input className={'login-input h-8'} type="email" name="email" id="email" ref={emailRef} required/>
                </div>

                <div>
                    <label className={'login-label'} htmlFor="password">
                        ПАРОЛЬ
                        <span className={'login-span'}>*</span>
                    </label>
                    <input className={'login-input h-8'} ref={passwordRef} type="password" name="password" id="password" required/>
                    <a  className="login-inks"> Забыли пароль? </a>
                </div>
            </div>

            <div>
                <button onClick={()=>{login()}} className="login-button"> Вход</button>
                <div>
                    <div className="login-need-registration"> Нужна учетная запись?
                        <Link to={'/registration'} className="login-inks"> Зарегистрироваться </Link>
                    </div>

                </div>
            </div>

        </div>
        <ToastContainer />
    </div>
}

export default LoginView