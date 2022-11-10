import { FormikErrors } from "formik";
import { LoginValues } from "../pages/Login";


const loginValidate = (values: LoginValues) => {
    const errors:FormikErrors<LoginValues> = {};

    if (!values.username.length) {
        errors.username = 'Empty username';
    }
    if(!values.password.length) {
        errors.password = 'Empty password';
    }

    return errors;
}

export default loginValidate;