import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";
import { useRouter } from "../AppRouter";

export default function BottomNav({
    menu
}:{
    menu : string
}){
    const router = useRouter();

    return (
        <Grid2
            position={'fixed'}
            bottom={0}
            width={'100%'}
            height={'80px'}
            paddingBottom={'10px'}
            bgcolor={'#FAFAFA'}
            borderTop={'1px solid #e3e3e3'}
        >
            <BottomNavigation 
                showLabels
                value={menu} 
                sx={{height:'60px', background : '#FAFAFA'}}
            >
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<RestoreIcon />}
                    onClick={()=>{router.goStack(0)}}
                />
                <BottomNavigationAction
                    label="Item"
                    value="item"
                    icon={<FavoriteIcon />}
                    onClick={()=>{router.goStack(1)}}
                />
                <BottomNavigationAction
                    label="Recipe"
                    value="recipe"
                    icon={<LocationOnIcon />}
                    onClick={()=>{router.goStack(2)}}
                />
                <BottomNavigationAction 
                    label="Menu" 
                    value="menu" 
                    icon={<FolderIcon />} 
                    onClick={()=>{router.goStack(3)}}
                />
            </BottomNavigation>
        </Grid2>
    )
}