import { Box, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { grey } from "@mui/material/colors";
import { useDevice } from "../../utils/hooks/DeviceHooks";
import BasicMobileLayout from "../../layout/BasicMobileLayout";
import Page from "../Page";
import BasicTabletLayout from "../../layout/BasicTabletLayout";
import LoginAPI from "../../modules/login/api/LoginApi";
import { useNavigate } from "react-router-dom";

export default function SettingPage(){
    const {isMobile} = useDevice();

    return (
        <>
            <SettingPageForMobile />
        </>
    )
}

function SettingPageForMobile(){
    const navigate = useNavigate();

    function logout(){
        LoginAPI.logout().finally(()=>{
            navigate('/login',{replace : true});
        })
    }
    return (
        <Page>
            <BasicMobileLayout>
                <Grid2
                    padding={2}
                >
                    <List>
                        <ListItemButton 
                            onClick={()=>{logout()}}
                            divider
                        >
                            Log out
                        </ListItemButton>
                    </List>
                </Grid2>
            </BasicMobileLayout>
        </Page>
    )
}
