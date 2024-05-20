import { Button } from "@mui/material";
import {login} from "../api/LoginApi";
interface Props {
    id : string
    password : string
    onLoginSuccess : Function
    onLoginFail : Function
}

export default function LoginButton(props : Props){
    async function onClickHandler(){
        const result = await login(props.id, props.password);
        if(result.code === 0){
            props.onLoginSuccess();
        } else {
            props.onLoginFail();
        }
    }

    return (
        <Button 
            style={{borderRadius : '100px'}}
            size="large"
            variant="contained" 
            onClick={onClickHandler}>Log in</Button>
    )
}