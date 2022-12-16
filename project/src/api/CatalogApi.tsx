import Axios, {AxiosError} from "axios";

export async function GetProducts() {
    return Axios.get("http://localhost:3000/products",
        {
            responseType: "json"
        }
    ).then
    (response => {
        return response.data;
    })
        .catch((error: AxiosError) => {
            if (error.response!.status === 401) {
                alert(error.message);
            }
        });
}