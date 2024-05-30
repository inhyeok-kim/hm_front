import { Button } from "@mui/material";
import LoginAPI from "../api/LoginApi";
interface Props {
    id : string
    password : string
    remember? : boolean
    onLoginSuccess : Function
    onLoginFail : Function
}

export default function LoginButton(props : Props){

    async function onClickHandler(){
        const result = await LoginAPI.login(props.id, props.password,props.remember);
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