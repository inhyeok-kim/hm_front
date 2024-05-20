import AxiosBuilder from "../../../utils/axios/AxiosBuilder";


const signAxios = AxiosBuilder.getAxiosInstance({
    baseURL : import.meta.env.VITE_DEFAULT_API_SERVER+"/sign"
});

export async function sign(id: string, password : string, name : string){
    const result = await signAxios.post("",{
        loginId : id,
        password : password,
        name : name
    });
    return result.data;
}
