import {HttpResponse, http} from 'msw';

const baseURL = import.meta.env.VITE_DEFAULT_API_SERVER+"/auth";

export const authDatas = [
    {
        id : 1,
        loginId : "test",
        password : "1234"
    }
]

let loginUser : any = authDatas[0];

export const authHandlers = [
    http.get(baseURL, async ({request})=>{
        if(loginUser === null){
            return HttpResponse.json({code : -100, message : 'un Authenticated'}, {status : 400})
        } else {
            return HttpResponse.json({code : 0});
        }
    }),
    http.post(baseURL,async ({request})=>{
        const body = await request.json() as any;
        const loginId = body.loginId;
        const password = body.password

        const auth = authDatas.find(auth=>auth.loginId === loginId && auth.password === password);
        if(auth) {
            loginUser === auth;
            return HttpResponse.json({
                code : 0
            });
        } else {
            return HttpResponse.json({
                code : -1
            });
        }
    }),
    http.post(baseURL+"/sign",async ({request})=>{
        const body = await request.json() as any;
        const loginId = body.loginId;
        const name = body.name;
        const password = body.password;

        authDatas.push({
            id : 2,
            loginId : loginId,
            password : password
        });
        
        return HttpResponse.json({
            code : 0
        });
    })
]