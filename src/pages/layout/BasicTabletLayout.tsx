import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { MouseEvent, ReactNode, useEffect, useRef } from "react";
import { useLocation, useRouter } from "../AppRouter";
import { color_green } from "../../utils/style/hmstyle";
import { Stack, Typography } from "@mui/material";
import { firstCharToUpperCase } from "../../utils/com/StringUtils";

const menuList = ['home','item','recipe','menu']

export default function BasicTabletLayout({
    children
}:{
    children : ReactNode | ReactNode[]
}){
    
    const selectorRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const location = useLocation();

    useEffect(()=>{
        const menu = location.menu;
        if(selectorRef.current){
            selectorRef.current.style.top = document.getElementById('menu-'+menu)!.offsetTop - 16 + 'px';
        }
    },[]);

    function menuHandler(e : MouseEvent<HTMLDivElement>, stackNum : number,menu : string){
        router.goStack(stackNum,menu);
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
                        menuList.map((m,i)=>(
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
                                    onClick={(e)=>{menuHandler(e,i,m)}}
                                >
                                    <Typography zIndex={1} fontWeight={'bold'} style={{transition : 'color 0.3s'}} color={location.menu===m ? color_green : "white"}>{firstCharToUpperCase(m)}</Typography>
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
                {children}
            </Grid2>
        </Grid2>
    )
}