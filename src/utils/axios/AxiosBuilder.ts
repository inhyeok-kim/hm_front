import axios, { CreateAxiosDefaults } from "axios";

function getAxiosInstance(config?: CreateAxiosDefaults<any> | undefined){
    const axiosInstance = axios.create(config);
    
    axiosInstance.interceptors.response.use((response)=>{
        if(response.data.code === -100){
            if(!location.pathname.startsWith('/login')){
                location.href="/login";
            }
        }
        return response;
    }, (error)=>{
        if(error.response.data.code === -100){
            if(!location.pathname.startsWith('/login')){
                location.href="/login";
            }
        }
        return Promise.reject(error);
    });

    return axiosInstance;
}

const AxiosBuilder = {
    getAxiosInstance
}
export default AxiosBuilder;