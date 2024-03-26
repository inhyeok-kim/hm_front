import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SignFormWidget from "../../modules/sign/widgets/SignFormWidget";

export default function SignPage(){
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
                <SignFormWidget/>
            </Grid2>
        </Grid2>
    )
}