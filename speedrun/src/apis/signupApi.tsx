import { baseURL } from '../constants';
import Axios, {AxiosError, AxiosResponse} from 'axios';
import { AuthContext } from "../components/AuthContext";
import { SignupValues } from "../pages/Signup";

interface response{
    email: string,
    username: string
}

const signupPath = baseURL + '/dj-rest-auth/registration/'

export async function postSignup(data:SignupValues, context: AuthContext|null ){
    Axios.post(
        signupPath, 
        data
    ).then
    ( (result:AxiosResponse) => {
        localStorage.setItem('key', result.data.key)
        localStorage.setItem('username', data.username)
        context?.setAuth(true)
    })
    .catch((error: AxiosError) => {
        const data:response|any = error.response?.data
        alert(data?.email + data?.username);
    });
}