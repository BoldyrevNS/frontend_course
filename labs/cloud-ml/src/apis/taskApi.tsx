import Axios, { AxiosError } from "axios";

const correlationPath: string = 'http://localhost:8080/correlation';
const clusterizationPath: string = 'http://localhost:8080/clusterization';
const distributionPath: string = 'http://localhost:8080/distribution';
const regressionPath: string = 'http://localhost:8080/regression';
const preprocessingPath: string = 'http://localhost:8080/preprocessing';

function postToTask(path: string, formData: FormData, user: string | null, parameters: Object) {
    return Axios.post(path,
        formData,
        {
            params: { ...{ user: user }, ...parameters },
            headers: { "Content-Type": "multipart/form-data" },
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

export function postCorrelation(formData: FormData, user: string | null, colormap: string | null) {
    return postToTask(correlationPath, formData, user, { colormap: colormap })
}


export function postClusterization( formData: FormData, user: string | null, clustersNumber: number, withCenters: boolean) {
    return postToTask(clusterizationPath, formData, user,
        {
            clusters_num: clustersNumber,
            clusters_centers: withCenters
        })
}

export function postDistribution(formData: FormData, user: string | null, columnName: string | null) {
    return postToTask(distributionPath, formData, user, { column_name: columnName })
}


export function postRegression(formData: FormData, user: string | null, 
                        polynomialOrder: number, columnNameX: string | null, columnNameY: string | null) {
    return postToTask(regressionPath,  formData, user,
        {
            order: polynomialOrder,
            column_x: columnNameX,
            column_y: columnNameY
        })
}


export function postPreprocessing(formData: FormData, user: string | null) {
    return Axios.post(preprocessingPath,
        formData,
        {
            params: { user: user },
            headers: { "Content-Type": "multipart/form-data" },
            responseType: "blob"
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