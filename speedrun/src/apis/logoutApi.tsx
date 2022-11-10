import { baseURL } from '../constants';
import Axios, {AxiosError} from 'axios';


const logoutPath = baseURL + '/dj-rest-auth/logout/'

export async function Logout(){
    Axios.get(
        logoutPath
    ).then
    ( () => {
        localStorage.clear()
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });
}