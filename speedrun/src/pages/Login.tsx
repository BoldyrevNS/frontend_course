import {Field, Form, Formik} from 'formik';
import React from 'react';
import Widget from '../components/ContentWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginValidate from '../validations/loginValidate';
import { postLogin } from '../apis/loginApi';
import { useNavigate } from 'react-router-dom';
import authContext from '../components/AuthContext';


export interface LoginValues {
    username: string,
    password: string
}

const Login = () => { 
    const navigate = useNavigate();
    const auth_context = React.useContext(authContext);
    const onSubmit = (values: LoginValues) =>{
        postLogin(values, auth_context)
        navigate('/')
    }

    return (
        <Widget title='Log in'>
            <Formik
                initialValues={{
                username: '',
                password: '',
                }}
                onSubmit={onSubmit}
                validate={loginValidate}
            >{({ errors, touched }) => (
                <Form>
                    <label htmlFor="username">Username</label>
                    <Field className='form-control' id="username" name="username" placeholder="username" />
                    {errors.username && touched.username && 
                        <div className='text-danger'>
                            {errors.username}
                        </div>}
                    <br/>
                    <label htmlFor="password">Password</label>
                    <Field type='password' className='form-control' id="password" name="password" placeholder="password" />
                    {errors.password && touched.password && 
                        <div className='text-danger'>
                            {errors.password}
                        </div>}
                    <br/>
                    <div className='text-center'>
                        <button className='btn btn-success' type="submit">Log in</button>
                    </div>
                    </Form>
            )}
            </Formik>
        </Widget> 
    )
}

export default Login;