import { FormControl, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LoginButton from "../fetures/LoginButton";
import { useEffect, useState } from "react";
import { loginCheck } from "../api/LoginApi";

export default function LoginFormWidget(){
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    function onLoginSuccess(){

    }

    function onLoginFail(){

    }

    return (
        <Grid2>
            <FormControl>
                <TextField label='ID' value={id} onChange={(e)=>{setId(e.currentTarget.value)}} />
                <TextField label='PASSWORD' value={password} onChange={(e)=>{setPassword(e.currentTarget.value)}} />
                <LoginButton id={id} password={password} onLoginFail={onLoginFail} onLoginSuccess={onLoginSuccess} />
            </FormControl>
        </Grid2>
    )
}