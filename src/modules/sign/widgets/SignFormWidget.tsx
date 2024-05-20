import { Button, FormControl, Stack, TextField, Typography} from "@mui/material";
import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link, useNavigate } from "react-router-dom";
import { sign } from "../api/SignApi";

export default function SignFormWidget(){
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();
    async function onSign(){
        const result = await sign(id,password,name);
        if(result.code === 0){
            alert("회원가입 완료");
            navigate("/login");
        }
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
                    label='Email' 
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
                <TextField 
                    InputProps={{disableUnderline : true, style:{borderRadius : '8px'}}}
                    size="small" 
                    label='Name' 
                    variant="filled" 
                    value={name} 
                    onChange={(e)=>{setName(e.currentTarget.value)}} 
                    margin="dense" />
            </FormControl>
            <FormControl margin="normal" fullWidth>
                <Stack spacing={2}>
                    <Button style={{borderRadius : '100px'}} onClick={onSign} variant="contained" >Sign Up</Button>
                </Stack>
            </FormControl>
        </>
    )
}