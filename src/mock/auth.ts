import {HttpResponse, http} from 'msw';

const baseURL = import.meta.env.VITE_DEFAULT_API_SERVER+"/auth";

const authDatas = [
    {
        loginId : "test",
        password : "1234"
    }
]
export const authHandlers = [
    http.post(baseURL,async ({request})=>{
        const body = await request.json() as any;
        const loginId = body.id;
        const password = body.password

        const auth = authDatas.find(auth=>auth.loginId === loginId && auth.password === password);
        if(auth) {
            return HttpResponse.json({
                code : 0
            });
        } else {
            return HttpResponse.json({
                code : -1
            });
        }
    })
]