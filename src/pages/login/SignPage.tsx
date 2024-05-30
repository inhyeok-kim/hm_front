import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SignFormWidget from "../../modules/sign/widgets/SignFormWidget";
import { Button, Typography } from "@mui/material";
import { useDevice } from "../../utils/hooks/DeviceHooks";
import {  useNavigate } from "react-router-dom";

export default function SignPage(){
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
                        <Grid2 xs={3} textAlign={"left"}>
                            <Button onClick={()=>{navigate("/login",{replace : true})}} style={{textTransform : 'none'}} variant="text">Log In</Button>
                        </Grid2>
                        <Grid2 xs={6}>
                            <Typography textAlign={"center"} variant="h5" fontWeight={"bold"}>Sign Up</Typography>
                        </Grid2>
                        <Grid2 xs={3} textAlign={"right"}>
                        </Grid2>
                    </Grid2>
                    <Grid2
                        width={
                            '100%'
                        }
                    >
                        <SignFormWidget/>
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
                        <Grid2 xs={3} textAlign={"left"}>
                            <Button onClick={()=>{navigate("/login",{replace : true})}} style={{textTransform : 'none'}} variant="text">Log In</Button>
                        </Grid2>
                        <Grid2 xs={6}>
                            <Typography textAlign={"center"} variant="h5" fontWeight={"bold"}>Sign Up</Typography>
                        </Grid2>
                        <Grid2 xs={3} textAlign={"right"}>
                        </Grid2>
                    </Grid2>
                    <Grid2
                        width={
                            '100%'
                        }
                    >
                        <SignFormWidget/>
                    </Grid2>
                </Grid2>
            }
        </Grid2>
    )
}