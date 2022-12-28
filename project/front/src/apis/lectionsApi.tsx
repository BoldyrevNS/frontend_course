import Axios, {AxiosError, AxiosResponse} from 'axios';
import { baseURL } from '../constants';
import LectionsData from '../models/LectionsData';


const lectionsPath = baseURL + '/lections/'

export async function getLections(resultHandler: (data: any)=>void, id:string='', curs_id:string=''){
    if (id.length){
        Axios.get(lectionsPath+id+'/',
            { params:{}, responseType: "json" }
        ).then
        (result => {
            let data: LectionsData[] = (result as AxiosResponse<LectionsData[]>).data;
            resultHandler(data);
        })
        .catch((error: AxiosError) => {
            alert(error.message);
        });
    }
    if(curs_id.length){
    Axios.get(
        lectionsPath,
        { params:{curs_id:curs_id}, responseType: "json" }
    ).then
    (result => {
        const data: LectionsData[] = (result as AxiosResponse<LectionsData[]>).data;
        resultHandler(data)
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });}
}