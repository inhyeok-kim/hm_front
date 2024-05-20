import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LoginFormWidget from "../../modules/login/widgets/LoginFormWidget";
import { Button, Typography } from "@mui/material";
import { useDevice } from "../../utils/hooks/DeviceHooks";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const {isMobile} = useDevice();
    const navigate = useNavigate();

    return (
        <Grid2
            container
            width={'100%'}
            padding={3}
            justifyContent={isMobile ? '' : 'center'}
            alignItems={isMobile ? '' : 'center'}
            height={isMobile ? '' : '100%'}
        >
            {
                isMobile ? 
                <>
                    <Grid2
                        width={'100%'}
                        container
                        justifyContent={"space-between"}
                        marginBottom={5}
                    >
                        <Grid2 xs={3} textAlign={"left"}></Grid2>
                        <Grid2 xs={6}>
                            <Typography textAlign={"center"} variant="h5" fontWeight={"bold"}>Log In</Typography>
                        </Grid2>
                        <Grid2 xs={3} textAlign={"right"}>
                            <Button onClick={()=>{navigate("/sign")}} style={{textTransform : 'none'}} variant="text">Sign Up</Button>
                        </Grid2>
                    </Grid2>
                    <Grid2
                        width={
                            '100%'
                        }
                    >
                        <LoginFormWidget/>
                    </Grid2>
                </>
                :
                <Grid2
                    container
                    width={'350px'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Grid2
                        width={'100%'}
                        container
                        justifyContent={"space-between"}
                        marginBottom={5}
                    >
                        <Grid2 xs={3} textAlign={"left"}></Grid2>
                        <Grid2 xs={6}>
                            <Typography textAlign={"center"} variant="h5" fontWeight={"bold"}>Log In</Typography>
                        </Grid2>
                        <Grid2 xs={3} textAlign={"right"}>
                            <Button onClick={()=>{navigate("/sign")}} style={{textTransform : 'none'}} variant="text">Sign Up</Button>
                        </Grid2>
                    </Grid2>
                    <Grid2
                        width={
                            '100%'
                        }
                    >
                        <LoginFormWidget/>
                    </Grid2>
                </Grid2>
            }
        </Grid2>
    )
}