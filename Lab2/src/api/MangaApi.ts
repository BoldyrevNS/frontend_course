import axios, { AxiosRequestConfig } from 'axios';
import Axios, {AxiosError, AxiosResponse} from 'axios';
import { AuthContext } from '../components/AuthContext';
import { baseURL } from '../constants';
import MangaData, { UserMangaData } from '../models/Manga';

const mangaPath = 'http://127.0.0.1:8000/api/MangaLib/manga/'
const userMangaPath = 'http://localhost:8000/api/MangaLib/userManga/'

export async function getMangas(resultHandler: (data: any)=>void){
    
    Axios.get(mangaPath,
        { params:{}, responseType: "json" }
    ).then
    (result => {
        let data: MangaData[] = (result as AxiosResponse<MangaData[]>).data;
        resultHandler(data);
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });

}

export async function getMangaId(resultHandler: (data: any)=>void, id: string|undefined){
    
    Axios.get(mangaPath + id + "/",
        { params:{}, responseType: "json" }
    ).then
    (result => {
        let data: MangaData = (result as AxiosResponse<MangaData>).data;
        resultHandler(data);
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });

}

export async function getUserMangas(resultHandler: (data: any)=>void){
    
    Axios.get(userMangaPath + "get_mangas/",
        { params:{user_id:parseJwt(localStorage.getItem('access')).user_id}, responseType: "json" }
    ).then
    (result => {
        const res: MangaData = (result as AxiosResponse<MangaData>).data;
        resultHandler(res);
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });

}

export async function checkUserMangaId(resultHandler: (data: any)=>void, id: number){
    
    Axios.get(userMangaPath + "check_manga/",
        { params:{user_id:parseJwt(localStorage.getItem('access')).user_id, manga_id:id}, responseType: "json" }
    ).then
    (result => {
        const res: Boolean = (result as AxiosResponse<any>).data?.res;
        resultHandler(res);
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });

}

export async function postManga(data: any,  auth_context:AuthContext|null){
    const api = axios.create({baseURL: userMangaPath})
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
            }
        }
    })
    api.post<UserMangaData>(
        '', 
        {user_id:parseJwt(localStorage.getItem('access')).user_id, manga_id:data.id}, 
        {
            headers: {
                'Content-Type': 'application/json'
            },
        }  
    )
    .catch((error: AxiosError) => {
        console.log(error.message);
    });   
}

function parseJwt (token: any) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}