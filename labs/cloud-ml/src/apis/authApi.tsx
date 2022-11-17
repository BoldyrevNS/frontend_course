import Axios, {AxiosError} from 'axios';
import { User } from '../models/user';

const authenticationBasePath:string = 'http://localhost:8080/authentication';
const refreshBasePath:string = 'http://localhost:8080/refresh';

export function getAuth(resultHandler: (data: any)=>void, errorHandler: (data: any)=>void, login: string, password: string){

    Axios.get(authenticationBasePath,
        {
            auth: {
                username: login,
                password: password
            },
            responseType: 'json' 
        }
    ).then
    (response => {
        console.log(response);
        resultHandler((oldData: Object) => ({ ...oldData, ...response.data }));
    })
    .catch((error: AxiosError) => {
        errorHandler(error.message);
    });

}

export function postAuth(resultHandler: (data: any)=>void, errorHandler: (data: any)=>void, login: string, password: string){

    Axios.post(authenticationBasePath,
        null,
        {
            auth: {
                username: login,
                password: password
            }, 
            responseType: 'json' 
        }
    ).then
    (response => {
        resultHandler((oldData: Object) => ({ ...oldData, ...response.data }));
    })
    .catch((error: AxiosError) => {
        errorHandler(error.message);
    });

}


export function getRefresh(){
    const token = localStorage.getItem('refresh_token')
    return Axios.get(refreshBasePath,
        {
            headers: { 'Authorization': ''+ token},
            responseType: 'json' 
        }
    ).then
    (response => {
        const data: User = response.data;
        localStorage.setItem('token', data.token);
        return true;
    })
    .catch((error: AxiosError) => {
        localStorage.setItem('token', '');
        localStorage.setItem('refresh_token', '');
        return null;
    });

}