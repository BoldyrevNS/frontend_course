import { FormikErrors } from "formik";
import { SignupValues } from "../pages/Signup";


const signupValidate = (values: SignupValues) => {
    const errors:FormikErrors<SignupValues> = {};

    if (!values.username.length) {
        errors.username = 'Empty username';
    }
    if (!values.email.length) {
        errors.email = 'Empty email';
    }else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

    if(!values.password1.length) {
        errors.password1 = 'Empty password';
    }
    if(!values.password2.length) {
        errors.password2 = 'Empty password';
    }
    if(values.password1 !== values.password2){
        errors.password1 = 'Invalid password';
        errors.password2 = 'Invalid password';
    }

    return errors;
}

export default signupValidate;