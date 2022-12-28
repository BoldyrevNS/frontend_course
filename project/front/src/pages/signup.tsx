
import { useNavigate } from 'react-router-dom';
import { postSignup } from '../apis/signupApi';
import authContext from '../components/authContext';
import '../css/signup.css';
import React, { useEffect } from 'react';


export interface SignupValues {
    username: string,
    email: string,
    password1: string,
    password2: string
}



const Signup = () => {

    const [login, setLogin] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password1, setPassword1] = React.useState<string>('');
    const [password2, setPassword2] = React.useState<string>('');
    const [error, setError] = React.useState<string>('');
    const [isPressed, setPressed] = React.useState<boolean>(false);
    const navigate = useNavigate();
    const auth_context = React.useContext(authContext);

    const signupValidate = (values: SignupValues) => {
        setError( '' );
        if (!values.username.length) {
            setError( 'Empty username' );
        }
        if (!values.email.length) {
            setError( 'Empty email' );
        }else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            setError( 'Invalid email address' );
          }
    
        if(!values.password1.length) {
            setError( 'Empty password' );
        }
        if(!values.password2.length) {
            setError( 'Empty password' );
        }
        if(values.password1 !== values.password2){
            setError( 'Invalid password' );
        }
    
    }

    useEffect( () =>{
        if (isPressed){
            console.log(isPressed, "aaaaaa")
            setPressed(false)
            if (error === '') {
                const signupInfo = {} as SignupValues
                signupInfo.username = login
                signupInfo.email = email
                signupInfo.password1 = password1
                signupInfo.password2 = password2
                const setSignup = async () => {
                    const temp = await postSignup(signupInfo, auth_context)
                    navigate("/")
                }
                setSignup()
            }
        }
        
        
    }, [auth_context, login, email, password1, password2, navigate, error, isPressed   ])

    
    function handleSubmit(event: any) {
        event.preventDefault()
        const signupInfo = {} as SignupValues
                signupInfo.username = login
                signupInfo.email = email
                signupInfo.password1 = password1
                signupInfo.password2 = password2
        signupValidate(signupInfo)
        setPressed(true)
        
    };


    function handleInput(event: any, set:any) {
        event.preventDefault()
        set(event.target.value.trim())
    }
    
    return (
        <div className="reg-form">
        <h1>Регистрация</h1>
        <hr />
        <form className="mt-4" >
        {<div className="errors">{error}</div>}
            <div className="mb-4">
                <div><label>Login</label></div>
                <div><input type="text" className="w-100" name="email" required onChange={evt => handleInput(evt, setLogin)}  /></div>
            </div>
            <div className="mb-4">
                <div><label>Email</label></div>
                <div><input type="text" className="w-100" name="email" required onChange={evt => handleInput(evt, setEmail)} /></div>
            </div>
            <div className="mb-4">
                <div><label>Пароль</label></div>
                <div><input type="text" className="w-100" name="password1" required onChange={evt => handleInput(evt, setPassword1)} /></div>
            </div>
            <div className="mb-4">
                <div><label>Повторите пароль</label></div>
                <div><input type="text" className="w-100" name="password2" required onChange={evt => handleInput(evt, setPassword2)} /></div>
            </div>
            <div className="mb-4">
                <button type="submit" className="btn btn-primary w-100"  onClick={(event) => handleSubmit(event)} >Sign up</button>
            </div>
      </form>
      </div>
    )
}

export default Signup;