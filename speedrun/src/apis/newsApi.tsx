import Axios, {AxiosError, AxiosResponse} from 'axios';
import { baseURL } from '../constants';
import NewsData from '../models/NewsData';


const newsPath = baseURL + '/speedrun/news/'

export async function getNews(resultHandler: (data: any)=>void, id:string=''){
    if (!id.length){
        Axios.get(
            newsPath,
            { params:{}, responseType: "json" }
        ).then
        (result => {
            const data: NewsData[] = (result as AxiosResponse<NewsData[]>).data;
            resultHandler(data)
        })
        .catch((error: AxiosError) => {
            alert(error.message);
        });
    }else{
        Axios.get(newsPath+id+'/',
            { params:{}, responseType: "json" }
        ).then
        (result => {
            const data: NewsData = (result as AxiosResponse<NewsData>).data;
            resultHandler(data)
        })
        .catch((error: AxiosError) => {
            alert(error.message);
        });
    }
}