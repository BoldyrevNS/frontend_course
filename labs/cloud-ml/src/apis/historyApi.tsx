import Axios, { AxiosError } from "axios";
import { getRefresh } from "./authApi";

const historyPath: string = 'http://localhost:8080/history';


export async function getHistory() {
    const token = localStorage.getItem('token')
    return Axios.get(historyPath,
        {
            headers: { 'Authorization': ''+token},
            responseType: "json"
        }
    ).then
        (response => {
            return response.data;
        })
        .catch((error: AxiosError) => {
            if(error.response!.status === 401){
                return getRefresh();
            }
            alert(`${error.response!.status} ${error.response!.data}.`);
            return null;
        });
}