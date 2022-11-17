import Axios, { AxiosError } from "axios";
import { getRefresh } from "./authApi";

const correlationPath: string = 'http://localhost:8080/correlation';
const clusterizationPath: string = 'http://localhost:8080/clusterization';
const distributionPath: string = 'http://localhost:8080/distribution';
const regressionPath: string = 'http://localhost:8080/regression';
const preprocessingPath: string = 'http://localhost:8080/preprocessing';

function postToTask(path: string, formData: FormData, parameters: Object) {
    const token = localStorage.getItem('token')
    return Axios.post(path,
        formData,
        {
            params: { ...parameters },
            headers: { 
                "Content-Type": "multipart/form-data",
                'Authorization': ''+token
            },
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
            return undefined;
        });
}

export function postCorrelation(formData: FormData, colormap: string | null) {
    return postToTask(correlationPath, formData, { colormap: colormap })
}


export function postClusterization( formData: FormData, clustersNumber: number, withCenters: boolean) {
    return postToTask(clusterizationPath, formData,
        {
            clusters_num: clustersNumber,
            clusters_centers: withCenters
        })
}

export function postDistribution(formData: FormData, columnName: string | null) {
    return postToTask(distributionPath, formData, { column_name: columnName })
}


export function postRegression(formData: FormData,  
                        polynomialOrder: number, columnNameX: string | null, columnNameY: string | null) {
    return postToTask(regressionPath,  formData,
        {
            order: polynomialOrder,
            column_x: columnNameX,
            column_y: columnNameY
        })
}


export function postPreprocessing(formData: FormData) {
    const token = localStorage.getItem('token')
    return Axios.post(preprocessingPath,
        formData,
        {
            headers: { 
                "Content-Type": "multipart/form-data",
                'Authorization': ''+token
            },
            responseType: "blob"
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
            return undefined;
        });
}