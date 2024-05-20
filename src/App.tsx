import { useEffect } from "react";
import Router from "./pages/Router";
import { loginCheck } from "./modules/login/api/LoginApi";

export default function App(){
    // useEffect(()=>{
    //     loginCheck();
    // },[]);
    return (
        <Router />
    )
}