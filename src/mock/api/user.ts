import {HttpResponse, http} from 'msw';

const baseURL = import.meta.env.VITE_DEFAULT_API_SERVER+"/user";

export const userDatas = [
    {
        id : "test1",
        name : '테스터1',
        familyId : 1
    }
]

let isLogin = false;
export const authHandlers = [
    http.get(baseURL, async ({request})=>{
        if(isLogin){
            return HttpResponse.json({code : 0});
        } else {
            return HttpResponse.json({code : -100, message : 'un Authenticated'}, {status : 400})
        }
    }),
]