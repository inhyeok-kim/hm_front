import AxiosBuilder from "../../../utils/axios/AxiosBuilder";


const loginAxios = AxiosBuilder.getAxiosInstance({
    baseURL : import.meta.env.VITE_DEFAULT_API_SERVER+"/auth"
});

const LoginAPI = {

    async login(id: string, password : string,remember : boolean = false){
        const result = await loginAxios.post("",{
            loginId : id,
            password : password,
            remember : remember
        });
        return result.data;
    }
    ,
    async loginCheck(){
        const result = await loginAxios.get("/check");
        return result.data;
    }
    ,
    async loginRemember(){
        const result = await loginAxios.post("/remember");
        return result.data;
    }
    ,
    async logout(){
        const result = await loginAxios.post("/logout");
        return result.data;
    }
}

export default LoginAPI;