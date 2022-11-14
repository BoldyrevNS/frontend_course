import Axios, {AxiosError} from 'axios';

const authenticationBasePath:string = 'http://localhost:8080/authentication';

export function getAuth(resultHandler: (data: any)=>void, errorHandler: (data: any)=>void, login: string, password: string){

    Axios.get(authenticationBasePath,
        {
            params: { login:login, password:password}, 
            responseType: 'json' 
        }
    ).then
    (response => {
        console.log(response);
        resultHandler((oldData: Object) => ({ ...oldData, ...response.data }));
    })
    .catch((error: AxiosError) => {
        errorHandler(error.message);
    });

}

export function postAuth(resultHandler: (data: any)=>void, errorHandler: (data: any)=>void, login: string, password: string){

    Axios.post(authenticationBasePath,
        null,
        {
            params: { login:login, password:password }, 
            responseType: 'json' 
        }
    ).then
    (response => {
        resultHandler((oldData: Object) => ({ ...oldData, ...response.data }));
    })
    .catch((error: AxiosError) => {
        errorHandler(error.message);
    });

}