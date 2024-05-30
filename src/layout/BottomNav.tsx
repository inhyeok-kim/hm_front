import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import SettingsIcon from '@mui/icons-material/Settings';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from "../pages/AppRouter";

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
                    icon={<HomeIcon />}
                    onClick={()=>{router.goStack(0,'home')}}
                />
                <BottomNavigationAction
                    label="Item"
                    value="item"
                    icon={<InventoryIcon />}
                    onClick={()=>{router.goStack(1,'item')}}
                />
                <BottomNavigationAction
                    label="Recipe"
                    value="recipe"
                    icon={<MenuBookIcon />}
                    onClick={()=>{router.goStack(2,'recipe')}}
                />
                <BottomNavigationAction 
                    label="Menu" 
                    value="menu" 
                    icon={<LocalDiningIcon />} 
                    onClick={()=>{router.goStack(3,'menu')}}
                />
                <BottomNavigationAction 
                    label="Setting" 
                    value="setting" 
                    icon={<SettingsIcon />} 
                    onClick={()=>{router.goStack(4,'setting')}}
                />
            </BottomNavigation>
        </Grid2>
    )
}