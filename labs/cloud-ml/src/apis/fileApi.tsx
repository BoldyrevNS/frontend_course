import Axios, { AxiosError } from 'axios';
import { getRefresh } from './authApi';

export const fileBasePath: string = 'http://localhost:8080/files';

export async function getImage(imageName: string) {
    const data: Blob | null| true = await getFile(imageName)
    if(data === true){
        return await get_image_from_blob(await getFile(imageName));
    }else if(data == null){
        return null
    }else{
        return await get_image_from_blob(data);
    }
}

export async function getFile(filename: string) {
    const token = localStorage.getItem('token')
    return Axios.get(`${fileBasePath}/${filename}`,
        {
            headers: { 'Authorization': ''+ token},
            responseType: 'blob'
        }
    ).then
        (response => {
            return response.data;
        })
        .catch((error: AxiosError) => {
            if(error.response!.status === 401){
                return getRefresh();
            }
            alert(error.message);
        });

}

export async function get_image_from_blob(blob: Blob){
    const res = await blob.arrayBuffer()
    const base64ImageString: string = Buffer.from(res).toString('base64');
    return "data:image/png;base64," + base64ImageString;
}