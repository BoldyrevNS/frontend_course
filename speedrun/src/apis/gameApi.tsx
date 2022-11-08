import Axios, {AxiosError, AxiosResponse} from 'axios';
import { baseURL } from '../constants';
import GameData from '../models/GameData';


const gamePath = baseURL + '/speedrun/games/'

export async function getGames(resultHandler: (data: any)=>void, id:string=''){
    if (!id.length){
        Axios.get(gamePath,
            { params:{}, responseType: "json" }
        ).then
        (result => {
            let data: GameData[] = (result as AxiosResponse<GameData[]>).data;
            resultHandler(data);
        })
        .catch((error: AxiosError) => {
            alert(error.message);
        });
    }
    else{
        Axios.get(gamePath+id+'/',
            { params:{}, responseType: "json" }
        ).then
        (result => {
            let data: GameData[] = (result as AxiosResponse<GameData[]>).data;
            resultHandler(data);
        })
        .catch((error: AxiosError) => {
            alert(error.message);
        });
    }
}