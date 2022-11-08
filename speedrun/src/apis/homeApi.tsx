import Axios, {AxiosError, AxiosResponse} from 'axios';
import { baseURL } from '../constants';
import RunData from '../models/RunData';

const runPath = baseURL + '/speedrun/home/'

export async function getLatestRuns(resultHandler: (data: any)=>void){
    Axios.get(runPath,
        { params:{}, responseType: "json" }
    ).then
    (result => {
        let data: RunData[] = (result as AxiosResponse<RunData[]>).data;
        resultHandler(data);
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });
}