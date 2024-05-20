import AxiosBuilder from "../../../utils/axios/AxiosBuilder";


const loginAxios = AxiosBuilder.getAxiosInstance({
    baseURL : import.meta.env.VITE_DEFAULT_API_SERVER+"/auth"
});

export async function login(id: string, password : string){
    const result = await loginAxios.post("",{
        loginId : id,
        password : password
    });
    return result.data;
}

export async function loginCheck(){
    const result = await loginAxios.get("/check");
    return result.data;
}