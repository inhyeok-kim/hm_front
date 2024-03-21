import {HttpResponse, http} from 'msw';

const baseURL = import.meta.env.VITE_DEFAULT_API_SERVER+"/auth";

const authDatas = [
    {
        id : "test",
        password : "1234"
    }
]
export const authHandlers = [
    http.post(baseURL,({request})=>{
        console.log(request.json());

        return HttpResponse.json({authDatas});
    })
]