import {Field, Form, Formik} from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignup } from '../apis/signupApi';
import authContext from '../components/AuthContext';
import Widget from '../components/ContentWidget';
import signupValidate from '../validations/signupValidate';

export interface SignupValues {
    username: string,
    email: string,
    password1: string,
    password2: string
}


const Signup = () => {
    const navigate = useNavigate();
    const auth_context = React.useContext(authContext);
    const onSubmit = (values: SignupValues) =>{
        postSignup(values, auth_context)
        navigate('/')
    }
    return (
        <Widget title='Sign up for speedrun'>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={onSubmit}
                validate={signupValidate}
            >{({ errors, touched }) => (
                <Form>
                    <label htmlFor="username">Username</label>
                    <Field className='form-control' id="username" name="username" placeholder="username" />
                    {errors.username && touched.username && 
                        <div className='text-danger'>
                            {errors.username}
                        </div>}
                    <br/>
                    <label htmlFor="email">Enter email</label>
                    <Field type='email' className='form-control' id="email" name="email" placeholder="speedrun@email.com" />
                    {errors.email && touched.email && 
                        <div className='text-danger'>
                            {errors.email}
                        </div>}
                    <br/>
                    <label htmlFor="password1">Enter password</label>
                    <Field type='password' className='form-control' id="password1" name="password1" placeholder="password" />
                    {errors.password1 && touched.password1 && 
                        <div className='text-danger'>
                            {errors.password1}
                        </div>}
                    <br/>
                    <label htmlFor="password2">Verify password</label>
                    <Field type='password' className='form-control' id="password2" name="password2" placeholder="password" />
                    {errors.password2 && touched.password2 && 
                        <div className='text-danger'>
                            {errors.password2}
                        </div>}
                    <br/>
                    <div className='text-center'>
                        <button className='btn btn-success' type="submit">Sign up</button>
                    </div>
                    </Form>
            )}
            </Formik>
        </Widget>
    )
}

export default Signup;