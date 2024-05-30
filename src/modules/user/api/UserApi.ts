import AxiosBuilder from "../../../utils/axios/AxiosBuilder";


const signAxios = AxiosBuilder.getAxiosInstance({
    baseURL : import.meta.env.VITE_DEFAULT_API_SERVER+"/user"
});

export async function getMe(){
    const result = await signAxios.get("/me");
    return result.data;
}
