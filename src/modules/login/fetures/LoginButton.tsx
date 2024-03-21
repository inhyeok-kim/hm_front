import { Button } from "@mui/material";
import {login} from "../api/LoginApi";
interface Props {
    id : string
    password : string
}

export default function LoginButton(props : Props){
    function onClickHandler(){
        login();
    }

    return (
        <Button onClick={onClickHandler}>Login</Button>
    )
}