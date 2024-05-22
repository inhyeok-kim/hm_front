import { BottomNavigation, BottomNavigationAction, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MouseEvent, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDevice } from "../utils/hooks/DeviceHooks";
import { color_green } from "../utils/style/hmstyle";
import { firstCharToUpperCase } from "../utils/com/StringUtils";

const menuList = ['home','item','recipe','menu']

export default function Root(){
    const {isMobile} = useDevice();

    return (
        <>
            {
                isMobile?
                <RootForMobile/>
                :
                <RootForTablet/>
            }
        </>
    )
}

function RootForMobile(){
    const [value, setValue] = useState('home');
    const navigate = useNavigate();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Grid2
            width={'100%'}
            height={'100%'}
        >
            <Grid2
                width={'100%'}
                height={'calc(100% - 81px)'}
                paddingTop={3}
                overflow={'auto'}
                sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
            >
                <Outlet/>
            </Grid2>
            <Grid2
                width={'100%'}
                height={'80px'}
                paddingBottom={'10px'}
                bgcolor={'#FAFAFA'}
                borderTop={'1px solid #e3e3e3'}
            >
                <BottomNavigation 
                    showLabels
                    value={value} 
                    onChange={handleChange}
                    sx={{height:'60px', background : '#FAFAFA'}}
                >
                    <BottomNavigationAction
                        label="Home"
                        value="home"
                        icon={<RestoreIcon />}
                        onClick={()=>{navigate('/home')}}
                    />
                    <BottomNavigationAction
                        label="Item"
                        value="item"
                        icon={<FavoriteIcon />}
                        onClick={()=>{navigate('/item')}}
                    />
                    <BottomNavigationAction
                        label="Recipe"
                        value="recipe"
                        icon={<LocationOnIcon />}
                        onClick={()=>{navigate('/recipe')}}
                    />
                    <BottomNavigationAction 
                        label="Menu" 
                        value="menu" 
                        icon={<FolderIcon />} 
                        onClick={()=>{navigate('/menu')}}
                    />
                </BottomNavigation>
            </Grid2>
        </Grid2>
    )
}

function RootForTablet(){
    const [menu, setMenu] = useState('home');
    const selectorRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    function menuHandler(e : MouseEvent<HTMLDivElement>, menu : string){
        setMenu(menu);
        navigate(menu);
        if(selectorRef.current){
            selectorRef.current.style.top = e.currentTarget.offsetTop - 16 + 'px';
        }
    }   

    return (
        <Grid2
            width={'100%'}
            height={'100%'}
            container
        >
            <div
                ref={selectorRef}
                style={{
                    transition : 'top 0.3s',
                    width : '143px',
                    position : 'absolute',
                    padding : '8px 16px',
                    top:'40px'
                }}
            >
                <Grid2
                    bgcolor={'white'}
                    borderRadius={'8px'}
                    padding={1}
                >
                    <div
                        style={{
                            width : '22px',
                            height : '22px',
                            borderRadius : '100%',
                            background : color_green
                        }}
                    ></div>
                </Grid2>
            </div>
            <Grid2
                width={'175px'}
                bgcolor={color_green}
                minHeight={'100vh'}
            >
                <Stack
                    padding={1}
                    paddingTop={6}
                    spacing={2}
                >
                    {
                        menuList.map(m=>(
                            <Grid2
                                key={m}
                                container
                                justifyContent={'center'}
                                paddingX={2}
                                paddingY={1}
                                alignItems={'center'}
                            >
                                <div
                                    style={{
                                        zIndex:1,
                                        width : '100%',
                                        textAlign : 'center'
                                    }}
                                    onClick={(e)=>{menuHandler(e,m)}}
                                >
                                    <Typography zIndex={1} fontWeight={'bold'} style={{transition : 'color 0.3s'}} color={menu===m ? color_green : "white"}>{firstCharToUpperCase(m)}</Typography>
                                </div>
                            </Grid2>
                        ))
                    }
                </Stack>
            </Grid2>
            <Grid2
                width={'calc(100% - 175px)'}
                height={'100%'}
                overflow={'auto'}
                sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
                paddingTop={2}
                paddingLeft={2}
                paddingRight={2}
            >
                <Outlet/>
            </Grid2>
        </Grid2>
    )
}