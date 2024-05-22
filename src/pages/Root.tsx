import { BottomNavigation, BottomNavigationAction, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
    const location = useLocation();
    const [value, setValue] = useState('home');
    useEffect(()=>{
        const path = location.pathname;
        setValue(path.substring(1,path.length));
    },[]);
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

        </Grid2>
    )
}

function RootForTablet(){
    const location = useLocation();
    const [menu, setMenu] = useState('home');
    useEffect(()=>{
        const path = location.pathname;
        setMenu(path.substring(1,path.length));
        if(selectorRef.current){
            selectorRef.current.style.top = document.getElementById('menu-'+path.substring(1,path.length))!.offsetTop - 16 + 'px';
        }
    },[]);

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
                                    id={'menu-'+m}
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