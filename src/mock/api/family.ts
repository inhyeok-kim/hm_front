import {HttpResponse, http} from 'msw';

const baseURL = import.meta.env.VITE_DEFAULT_API_SERVER+"/family";

export const familyDatas = [
    {
        id : 1,
        name : "testFam",
    }
]

let isLogin = false;
export const authHandlers = [
    http.get(baseURL+"/my", async ({request})=>{
    }),
]