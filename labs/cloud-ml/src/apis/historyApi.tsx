import Axios, { AxiosError } from "axios";

const historyPath: string = 'http://localhost:8080/history';


export async function getHistory(user: string | null) {
    return Axios.get(historyPath,
        {
            params: {user:user},
            responseType: "json"
        }
    ).then
        (response => {
            return response.data;
        })
        .catch((error: AxiosError) => {
            alert(`${error.response!.status} ${error.response!.data}.`);
            return null;
        });
}