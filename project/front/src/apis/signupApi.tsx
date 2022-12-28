import { baseURL } from '../constants';
import Axios, {AxiosError, AxiosResponse} from 'axios';
import { AuthContext } from "../components/authContext";
import { SignupValues } from "../pages/signup";


interface response{
    email: string,
    username: string
}

const signupPath = baseURL + '/dj-rest-auth/registration/'

export async function postSignup(data:SignupValues, context: AuthContext|null ){
    return Axios.post(
        signupPath, 
        data
    ).then
    ( (result:AxiosResponse) => {
        // localStorage.setItem('access', result.data.access_token)
        // localStorage.setItem('refresh', result.data.refresh_token)
        // context?.setAuth(true)
    })
    .catch((error: AxiosError) => {
        const data:response|any = error.response?.data
        alert(data?.email + data?.username);
    });
}