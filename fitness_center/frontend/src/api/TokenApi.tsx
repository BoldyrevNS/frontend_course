import Axios, {AxiosError} from "axios";
import AuthApi from "./AuthApi";

const isTokenValidPath: string = 'http://localhost:8080/check-token';

export function checkToken() {

    const token = localStorage.getItem('token')
    return Axios.get(isTokenValidPath,
        {
            headers: { 'Authorization': ''+ token},
            responseType: 'json'
        }
    ).then
    (r => {
        return r.data;
    })
        .catch((error: AxiosError) => {
            if(error.response!.status === 401){
                return AuthApi.getRefresh();
            }
            alert(error.message);
            return null;
        });

}