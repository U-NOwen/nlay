import axios from "axios";
import {ElMessage} from "element-plus";

const server = axios.create({
    baseURL: "http://127.0.0.1:8080"
});
server.interceptors.request.use(config =>{
    return config;
},error => {
     return Promise.reject(error);
});
server.interceptors.response.use(
    (response) =>{
        const {data,meta} = response.data
        if(meta.status === 200)
        {
            return data;
        }else{
            ElMessage.error(meta.msg);
            return Promise.reject(new Error(meta.msg));
        }
    },
    error => {
        error.response && ElMessage.error(error.response.data)
        return Promise.reject(new Error(error.response.data));
    }
)
export default server;