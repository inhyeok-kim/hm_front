import { Button, FormControl, TextField} from "@mui/material";
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
            >
                <TextField label='ID' value={id} onChange={(e)=>{setId(e.currentTarget.value)}} margin="dense" />
                <TextField label='PASSWORD' type="password" value={password} onChange={(e)=>{setPassword(e.currentTarget.value)}} margin="dense" />
                <TextField label='NAME' value={name} onChange={(e)=>{setName(e.currentTarget.value)}} margin="dense" />
            </FormControl>
            <FormControl margin="dense" fullWidth>
                <Grid2 container justifyContent={'space-between'}>
                    <Link to={'/login'}>취소</Link>
                    <Button onClick={onSign} variant="contained" >가입</Button>
                </Grid2>
            </FormControl>
        </>
    )
}