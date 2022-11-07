import Axios, {AxiosError, AxiosResponse} from 'axios';
import RunShort from '../models/RunShort';


const runPath = 'http://localhost:8000/api/speedrun/runs/'

export async function getRunsShort(resultHandler: (data: any)=>void, id:number=1){
    Axios.get(runPath,
        { params:{game_id:id}, responseType: "json" }
    ).then
    (result => {
        let data: RunShort[] = (result as AxiosResponse<RunShort[]>).data;
        resultHandler(data);
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });
}