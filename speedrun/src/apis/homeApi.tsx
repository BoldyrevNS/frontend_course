import Axios, {AxiosError, AxiosResponse} from 'axios';
import RunData from '../models/RunData';

const runPath = 'http://localhost:8000/api/speedrun/home/'

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