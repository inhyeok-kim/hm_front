import axios, { CreateAxiosDefaults } from "axios";

function getAxiosInstance(config?: CreateAxiosDefaults<any> | undefined){
    const axiosInstance = axios.create(config);
    
    axiosInstance.interceptors.response.use((response)=>{
        return response;
    }, (error)=>{
        if(error.response.data.code === -100){
            alert("로그인이 필요합니다.");
            location.href="/login";
        }
        return Promise.reject(error);
    });

    return axiosInstance;
}

const AxiosBuilder = {
    getAxiosInstance
}
export default AxiosBuilder;