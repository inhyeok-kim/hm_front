import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ReactNode } from "react";


export default function BasicTabletLayout({
    children
}:{
    children : ReactNode | ReactNode[]
}){
    
    return (
        <Grid2
            width={'calc(100vw - 175px)'}
            marginLeft={'175px'}
            height={'100vh'}
            overflow={'auto'}
            sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
            paddingTop={2}
            paddingLeft={2}
            paddingRight={2}
        >
            {children}
        </Grid2>
    )
}