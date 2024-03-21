import { FormControl, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LoginButton from "../fetures/LoginButton";

export default function LoginFormWidget(){
    
    return (
        <Grid2>
            <FormControl>
                <TextField label='ID' />
                <TextField label='PASSWORD' />
                <LoginButton id="id" password="pwd"/>
            </FormControl>
        </Grid2>
    )
}