import Axios, { AxiosError } from 'axios';

export const fileBasePath: string = 'http://localhost:8080/files';

export async function getImage(imageName: string, user: string | null) {
    const data: Blob = await getFile(imageName, user)
    return await get_image_from_blob(data);
}

export async function getFile(filename: string, user: string | null) {

    return Axios.get(`${fileBasePath}/${filename}`,
        {
            params: { user: user },
            responseType: 'blob'
        }
    ).then
        (response => {
            return response.data;
        })
        .catch((error: AxiosError) => {
            alert(error.message);
        });

}

export async function get_image_from_blob(blob: Blob){
    const res = await blob.arrayBuffer()
    const base64ImageString: string = Buffer.from(res).toString('base64');
    return "data:image/png;base64," + base64ImageString;
}