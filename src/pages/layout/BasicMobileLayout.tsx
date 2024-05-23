import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ReactNode } from "react";
import BottomNav from "./BottomNav";
import Page from "../Page";
import { useLocation } from "../AppRouter";

export default function BasicMobileLayout({
    children
}:{
    children : ReactNode | ReactNode[]
}){
    const location = useLocation();
    return (
        <>
            <Grid2
                width={'100vw'}
                height={'calc(100vh - 81px)'}
                overflow={'auto'}
                sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
            >
                {children}
            </Grid2>
            <BottomNav menu={location.menu}/>
        </>
    )
}