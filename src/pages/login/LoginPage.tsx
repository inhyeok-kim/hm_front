import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LoginFormWidget from "../../modules/login/widgets/LoginFormWidget";

export default function LoginPage(){
    return (
        <Grid2
            container
            width={'100%'}
            height={'100%'}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Grid2
                width={
                    320
                }
            >
                <LoginFormWidget/>
            </Grid2>
        </Grid2>
    )
}