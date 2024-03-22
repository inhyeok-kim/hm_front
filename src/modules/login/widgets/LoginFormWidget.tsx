import { FormControl, TextField } from "@mui/material";
import LoginButton from "../fetures/LoginButton";
import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";

export default function LoginFormWidget(){
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    function onLoginSuccess(){

    }

    function onLoginFail(){

    }

    return (
        <>
            <FormControl
                fullWidth
            >
                <TextField label='ID' value={id} onChange={(e)=>{setId(e.currentTarget.value)}} margin="dense" />
                <TextField label='PASSWORD' value={password} onChange={(e)=>{setPassword(e.currentTarget.value)}} margin="dense" />
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