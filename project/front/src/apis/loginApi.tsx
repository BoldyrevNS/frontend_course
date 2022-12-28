import { LoginValues } from "../pages/login";
import { baseURL } from '../constants';
import Axios, {AxiosError, AxiosResponse} from 'axios';
import { AuthContext } from "../components/authContext";


const loginPath = baseURL + '/auth/token/'




export async function postLogin(data:LoginValues, context: AuthContext|null ){
    Axios.post(
        loginPath, 
        data
    ).then
    ( (result:AxiosResponse) => {
        localStorage.setItem('refresh', result.data.refresh)
        localStorage.setItem('access', result.data.access)
        context?.setAuth(true)
        
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });
    
}