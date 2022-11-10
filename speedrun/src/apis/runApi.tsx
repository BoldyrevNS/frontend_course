import Axios, {AxiosError, AxiosResponse} from 'axios';
import { MyFormValues } from '../components/CreateRun';
import { baseURL } from '../constants';
import RunShort from '../models/RunShort';


const runPath = baseURL + '/speedrun/runs/'

export async function getRunsShort(resultHandler: (data: any)=>void, id:number=1){
    Axios.get(runPath,
        { params:{game_id:id}, responseType: "json" }
    ).then
    (result => {
        const data: RunShort[] = (result as AxiosResponse<RunShort[]>).data;
        resultHandler(data);
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });
}

export async function postRun(resultHandler:(run: RunShort)=>void, data:MyFormValues, game_id:number){
    const now = new Date();
    const run = {
        data: now.toISOString().slice(0,10),
        hours: data.hour,
        minutes: data.minutes,
        seconds: data.seconds,
        video: data.link,
        userName: localStorage.getItem('username'),
        game: game_id
    }
    Axios.post<RunShort>(
        runPath, 
        run
    ).then
    (result => {
        const data: RunShort = (result as AxiosResponse<RunShort>).data;
        resultHandler(data);
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });
}