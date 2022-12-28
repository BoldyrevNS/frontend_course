import Axios, {AxiosError, AxiosResponse} from 'axios';
import { baseURL } from '../constants';
import CursData from '../models/CursData';


const cursPath = baseURL + '/curs/'

export function parseJwt (token: any) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
export async function getCurs(resultHandler: (data: any)=>void, id:string=''){
    if (id.length){
        Axios.get(cursPath+id+'/',
            { params:{}, responseType: "json" }
        ).then
        (result => {
            let data: CursData[] = (result as AxiosResponse<CursData[]>).data;
            resultHandler(data);
        })
        .catch((error: AxiosError) => {
            alert(error.message);
        });
    }
    else{
    const user_name = parseJwt(localStorage.getItem('access')).name
    Axios.get(
        cursPath,
        { params:{username:user_name}, responseType: "json" }
    ).then
    (result => {
        const data: CursData[] = (result as AxiosResponse<CursData[]>).data;
        resultHandler(data)
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });}
}