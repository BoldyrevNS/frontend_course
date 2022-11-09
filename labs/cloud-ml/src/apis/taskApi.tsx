import Axios, { AxiosError } from "axios";

const correlationPath: string = 'http://localhost:8080/correlation';
const clusterizationPath: string = 'http://localhost:8080/clusterization';
const distributionPath: string = 'http://localhost:8080/distribution';
const regressionPath: string = 'http://localhost:8080/regression';
const preprocessingPath: string = 'http://localhost:8080/preprocessing';

function postToTask(path: string, resultHandler: (data: any) => void, formData: FormData, parameters: Object){
    Axios.post(path,
        formData,
        { 
            params: { ...parameters }, 
            headers: { "Content-Type": "multipart/form-data" }, responseType: "json" 
        }
    ).then
    (response => {
        resultHandler((oldData: Object) => ({ ...oldData, ...response.data }));
    })
    .catch((error: AxiosError) => {
        alert(`${error.response!.status} ${error.response!.data}.`);
    });
}

export function postCorrelation(resultHandler: (data: any) => void, formData: FormData, colormap: string | null) {
    postToTask(correlationPath, resultHandler, formData, { colormap: colormap } )
}


export function postClusterization(resultHandler: (data: any) => void, formData: FormData, clustersNumber: number, withCenters: boolean) {
    postToTask(clusterizationPath, resultHandler, formData, 
        { 
            clusters_num: clustersNumber, 
            clusters_centers:withCenters 
        } )
}

export function postDistribution(resultHandler: (data: any) => void, formData: FormData, columnName: string | null) {
    postToTask(distributionPath, resultHandler, formData, { column_name: columnName } )
}


export function postRegression(resultHandler: (data: any) => void, formData: FormData, polynomialOrder: number, columnNameX: string | null, columnNameY: string | null) {
    postToTask(regressionPath, resultHandler, formData, { order: polynomialOrder, column_x: columnNameX, column_y: columnNameY } )
}


export function postPreprocessing(resultHandler: (data: any) => void, formData: FormData){
    Axios.post(preprocessingPath,
        formData,
        { 

            headers: { "Content-Type": "multipart/form-data" }, responseType: "blob"
        }
    ).then
    (response => {
        let data: Blob = new Blob([response.data], {
            type: 'text/csv'
          });
        let csvURL: string = window.URL.createObjectURL(data);
        resultHandler(csvURL);
    })
    .catch((error: AxiosError) => {
        alert(`${error.response!.status} ${error.response!.data}.`);
    });
}