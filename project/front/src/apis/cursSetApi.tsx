import axios, { AxiosRequestConfig } from 'axios';
import Axios, {AxiosError, AxiosResponse} from 'axios';
import { AuthContext } from "../components/authContext";
import { baseURL } from '../constants';
import { NavigateFunction } from 'react-router-dom';
import {parseJwt} from '../apis/cursApi'


const runPath = baseURL + '/cursset/'

export async function cursSet(cursCode:string, flag:number, auth_context:AuthContext | null, navigate:NavigateFunction){

    const api = axios.create({baseURL: baseURL})
    api.interceptors.request.use((config: AxiosRequestConfig) => {
        config.headers = {'Authorization': 'Bearer ' + localStorage.getItem('access')};
        return config;
    })
    api.interceptors.response.use((config) =>{
        return config;
    }, async (error) =>{
        if(error.response.status === 401 && error.config && !error.config._isRetry){
            try {
                const response = await axios.post(
                    `${baseURL}/auth/token/refresh/`,
                    {refresh:localStorage.getItem('refresh')}
                )
                localStorage.setItem('access', response?.data.access)
                error.config.headers = {
                    'Content-Type': 'application/json',
                }
                error.config.data = JSON.parse(error.config.data);
                return api.request(error.config);
            }catch (e){
                console.log(e);
                auth_context?.setAuth(false);
                localStorage.clear();
                navigate('/login')
            }
        }
    })

    // const user_name = parseJwt(localStorage.getItem('access')).name
    // api.post(
    //     runPath,
    //     {
    //         params:{curs_code:cursCode, user_name:user_name, flag:flag },
    //     }  
    // )
    // .catch((error: AxiosError) => {
    //     console.log(error.message);
    // });
    
    const user_name = parseJwt(localStorage.getItem('access')).name

    const json = {
        curs_code:cursCode,
        user_name:user_name,
        flag:flag 
    }

    return api.post(
        runPath,
        json, 
        {
            headers: {
                'Content-Type': 'application/json'
            },
        }  )
    .catch((error: AxiosError) => {
        console.log(error.message);
    });
    

}
