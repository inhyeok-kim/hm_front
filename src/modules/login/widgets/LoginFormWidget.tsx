import { FormControl, TextField, Typography } from "@mui/material";
import LoginButton from "../fetures/LoginButton";
import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link, useNavigate } from "react-router-dom";

export default function LoginFormWidget(){
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    const navigate = useNavigate();
    function onLoginSuccess(){
        navigate('/');
    }

    function onLoginFail(){
        setLoginFailed(true);
    }

    return (
        <>
            <FormControl
                fullWidth
            >
                <TextField label='ID' value={id} onChange={(e)=>{setId(e.currentTarget.value)}} margin="dense" />
                <TextField label='PASSWORD' type="password" value={password} onChange={(e)=>{setPassword(e.currentTarget.value)}} margin="dense" />
                {loginFailed?
                    <Typography variant="caption" color={"red"}>입력하신 정보와 일치하는 계정을 찾을 수 없습니다.</Typography>
                    :''
                }
            </FormControl>
            <FormControl margin="dense" fullWidth>
                <Grid2 container justifyContent={'space-between'}>
                    <Link to={'/sign'}>회원가입</Link>
                    <LoginButton id={id} password={password} onLoginFail={onLoginFail} onLoginSuccess={onLoginSuccess} />
                </Grid2>
            </FormControl>
        </>
    )
}