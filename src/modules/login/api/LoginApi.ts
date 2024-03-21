import axios from "axios";

const loginAxios = axios.create({
    baseURL : import.meta.env.VITE_DEFAULT_API_SERVER+"/auth"
})

export async function login(){
    const result = await loginAxios.post("",{
        id : 'test',
        password : '1234'
    });
    console.log(result);
}