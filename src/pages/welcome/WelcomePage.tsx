import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { color_green } from "../../utils/color/hmcolor";
import WelcomeWidget from "../../modules/welcome/widgets/WelcomeWidget";
import { useDevice } from "../../utils/hooks/DeviceHooks";


export default function WelcomePage(){
    const {isMobile} = useDevice();

    return (
        <Grid2
            container
            width={'100%'}
            height={'100%'}
            bgcolor={color_green}
            justifyContent={'center'}
            alignItems={'center'}
            padding={2}
        >
            <Grid2
                xs={isMobile ? 12 : 4}
                bgcolor={'white'}
                borderRadius={8}
                padding={2}
            >
                <WelcomeWidget/>
            </Grid2>
        </Grid2>
    )
}