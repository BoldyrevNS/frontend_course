import {Link, NavLink, redirect} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {registrationUser} from "../../redux/features/auth/AuthSlice";
import {useNavigate} from "react-router-dom"
import User from "../../types/User";
import {useAppDispatch, useAppSelector} from "../../hooks";

function RegistrationPage() {
    const isAuth: boolean = useAppSelector(state => Boolean( state.auth.token));
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [messageError, setMessage] = useState<User>({
        email: '',
        password: ''
    })

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const birthYearRef = useRef<HTMLSelectElement>(null)
    const birthMouthRef = useRef<HTMLSelectElement>(null)
    const birthDayRef = useRef<HTMLSelectElement>(null)

    const arrayOfDays:number[] = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const arrayOfMouth:string[] = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']

    let max:number = new Date().getFullYear()
    let min:number = max - 50
    let arrayOfYears:number[] = []

    for (let i:number = max; i >= min; i--) {
        arrayOfYears.push(i)
    }


    async function initUser() {

        if (null !== emailRef.current && null !== passwordRef.current && null !== nameRef.current && null !== birthDayRef.current && null !== birthMouthRef.current && null !== birthYearRef.current) {

            if (emailRef.current.value === '' || passwordRef.current.value.length < 4) {

                toast('поля не заполнены')

            } else {

                const user: User = {
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                    name: nameRef.current.value,
                    birth: `${birthDayRef.current.value}-${birthMouthRef.current.value}-${birthYearRef.current.value}`
                }

                const result = await dispatch(registrationUser(user))

                if (result.payload){
                    await toast(`${result.payload}`)
                }

                navigate('/')
            }

        }
    }


    useEffect(()=>{

        if (isAuth){
            redirect('/')
        }
    },[isAuth, dispatch])

    return <div className={'login-body'}>
        <div className="login-login-block">
            <div>
                <h1 className="login-hello-text">Создать учетную запись</h1>
            </div>
            <div>
                <div>
                    <label className={'login-label'} htmlFor="email"> E-MAIL </label>
                    <input className={'login-input h-8' + (messageError?.email ? '' : ' ring-red-200')}
                           type="email" name="email" id="email" ref={emailRef} required/>
                    {
                        messageError.email ?
                            <div className={'text-sm text-red-400'}>неправильно введен email</div> :
                            null
                    }
                </div>

                <div>
                    <label className={'login-label'} htmlFor="name"> ИМЯ ПОЛЬЗОВАТЕЛЯ </label>
                    <input className={'login-input h-8'} type="text" name="name" id="name" ref={nameRef}/>
                </div>

                <div>
                    <label className={'login-label'} htmlFor="password"> ПАРОЛЬ </label>
                    <input className={'login-input h-8'} type="password" name="password" id="password" ref={passwordRef}
                           required/>
                </div>

                <div>
                    <label className={'login-label'}> ДАТА РОЖДЕНИЯ </label>
                    <div className="login-birth-day">
                        <select ref={birthDayRef} className={'login-select'} name="Day">
                            {
                                arrayOfDays.map((day, key) => {
                                    return <option value={day} key={key}>
                                        {day}
                                    </option>
                                })
                            }
                        </select>

                        <select ref={birthMouthRef} className={'login-select'} name="Month">
                            {
                                arrayOfMouth.map((mouth, key) => {
                                    return <option key={key}>
                                        {mouth}
                                    </option>
                                })
                            }
                        </select>

                        <select ref={birthYearRef} className={'login-select'} name="Year">
                            {
                                arrayOfYears.map((year, key) => {
                                    return <option key={key}>
                                        {year}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>

            <div className={'flex flex-row justify-around items-center'}>
                <div className={'mr-[20px]'}>
                    <input className={'login-input'} type="checkbox" id="news" name="news"/>
                </div>
                <label className={'login-label'} htmlFor="news">(Необязательно) Я не против получать электронные письма
                    с новостями Discord, советами и специальными предложениями.
                    От рассылки можно отписаться в любое время.
                </label>
            </div>

            <div>
                <button onClick={() => {
                    initUser()
                }} className="login-button"> Продолжить
                </button>
                <div>
                    <div className="login-need-registration">
                        <Link to={'/'} className="login-inks"> Уже зарегистрированы? </Link>
                    </div>
                </div>

            </div>

            <div className="login-agreement">
                <div className="login-need-registration"> Регистрируясь вы соглашаетесь с
                    <a href="src/pages/Auth/RegistrationView#" className="login-inks"> Условиями Использования </a>
                    и
                    <a href="src/pages/Auth/RegistrationView#" className="login-inks"> Политикой Конфиденциальности </a>
                    Discord.
                </div>
            </div>

        </div>
        <ToastContainer/>
    </div>
}

export default RegistrationPage