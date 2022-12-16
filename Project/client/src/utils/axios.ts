
import axios from "src/utils/axios";

const instance = axios.create({
    baseURL:"http://localhost:4000/api"
})


instance.interceptors.request.use((config) =>{

    if (config.headers){

        config.headers.Authorization = window.localStorage.getItem('token')
    }

    return config
})

export default instance