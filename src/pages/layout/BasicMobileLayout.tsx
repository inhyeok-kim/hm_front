import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ReactNode } from "react";
import BottomNav from "./BottomNav";
import Page from "../Page";

export default function BasicMobileLayout({
    children
    ,menu
}:{
    children : ReactNode | ReactNode[]
    menu : string
}){
    return (
        <Page>
            <Grid2
                width={'100vw'}
                height={'calc(100vh - 81px)'}
                overflow={'auto'}
                sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
            >
                {children}
            </Grid2>
            <BottomNav menu={menu}/>
        </Page>
    )
}