import { Checkbox, FormControl, FormControlLabel, Stack, TextField, Typography } from "@mui/material";
import LoginButton from "../features/LoginButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { color_green } from "../../../utils/style/hmstyle";
import { CheckBox } from "@mui/icons-material";

export default function LoginFormWidget(){
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);

    const navigate = useNavigate();
    function onLoginSuccess(){
        navigate('/',{replace : true});
    }

    function onLoginFail(){
        setLoginFailed(true);
    }

    return (
        <>
            <FormControl
                fullWidth
                sx={{marginBottom:5}}
            >
                <TextField 
                    InputProps={{disableUnderline : true, style:{borderRadius : '8px'}}}
                    
                    size="small" 
                    label='ID' 
                    variant="filled" 
                    value={id} 
                    onChange={(e)=>{setId(e.currentTarget.value)}} 
                    margin="dense" />
                <TextField 
                    InputProps={{disableUnderline : true, style:{borderRadius : '8px'}}}
                    size="small" 
                    label='Password' 
                    variant="filled" 
                    type="password" 
                    value={password} 
                    onChange={(e)=>{setPassword(e.currentTarget.value)}} 
                    margin="dense" />
                {loginFailed?
                    <Typography variant="caption" color={"red"}>입력하신 정보와 일치하는 계정을 찾을 수 없습니다.</Typography>
                    :''
                }
            </FormControl>
            <FormControlLabel control={<Checkbox checked={remember} onChange={()=>{setRemember(curr=>!curr)}}  size="small"  />} slotProps={{typography : {fontSize:'0.9rem'}}} label="Remember me" />
            <FormControl margin="normal" fullWidth>
                <Stack spacing={2}>
                    <LoginButton 
                        id={id} 
                        password={password} 
                        remember={remember}
                        onLoginFail={onLoginFail} 
                        onLoginSuccess={onLoginSuccess}
                     />
                    <Link to={'/sign'} replace>
                        <Typography textAlign={'center'} color={color_green}>
                            Forgot your password?
                        </Typography>
                    </Link>
                </Stack>
            </FormControl>
        </>
    )
}