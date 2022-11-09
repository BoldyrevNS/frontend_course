import Axios, {AxiosError} from 'axios';

const imageBasePath:string = 'http://localhost:8080/images';

export function getImage(resultHandler: (data: any)=>void, imageName: string){

    Axios.get(`${imageBasePath}/${imageName}`,
        { responseType: 'arraybuffer' }
    ).then
    (response => {
        let base64ImageString: string = Buffer.from(response.data, 'binary').toString('base64');
        resultHandler("data:image/png;base64," + base64ImageString);
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });

}