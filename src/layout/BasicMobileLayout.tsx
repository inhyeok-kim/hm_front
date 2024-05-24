import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ReactNode } from "react";

export default function BasicMobileLayout({
    children
    ,bgColor='white'
}:{
    children : ReactNode | ReactNode[]
    bgColor? : string
}){
    return (
        <Grid2
            bgcolor={bgColor}
            width={'100vw'}
            height={'calc(100vh - 81px)'}
            overflow={'auto'}
            sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
        >
            {children}
        </Grid2>
    )
}