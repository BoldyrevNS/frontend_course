import { LoginValues } from "../pages/Login";
import { baseURL } from '../constants';
import Axios, {AxiosError, AxiosResponse} from 'axios';
import { AuthContext } from "../components/AuthContext";


const loginPath = baseURL + '/dj-rest-auth/login/'

export async function postLogin(data:LoginValues, context: AuthContext|null ){
    Axios.post(
        loginPath, 
        data
    ).then
    ( (result:AxiosResponse) => {
        localStorage.setItem('key', result.data.key)
        localStorage.setItem('username', data.username)
        context?.setAuth(true)
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });
}