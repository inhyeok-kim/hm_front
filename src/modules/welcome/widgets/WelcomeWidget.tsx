import { Button, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { color_font_grey } from "../../../utils/style/hmstyle";
import { useRef, useState } from "react";
import JoinFamilyWidget from "./JoinFamilyWidget";
import MakeFamilyWidget from "./MakeFamilyWidget";

type Mode = 'join' | 'make';

export default function WelcomeWidget(){
    const [mode, setMode] = useState<Mode>("make");
    const containerRef = useRef<HTMLDivElement>(null);

    function fnJoinFamily(){
        setMode("join");
        if(containerRef.current){
            containerRef.current.style.transform='translate(-100%)'
        }
    }

    function fnMakeFamily(){
        setMode("make");
        if(containerRef.current){
            containerRef.current.style.transform='translate(-100%)'
        }
    }
    function fnHome(){
        setMode("make");
        if(containerRef.current){
            containerRef.current.style.transform='translate(0)'
        }
    }

    return (
        <Grid2
            width={'100%'}
            overflow={'hidden'}
        >
            <div
                ref={containerRef}
                style={{
                    transition : 'transform 0.5s'
                }}
            >
                <Stack
                    direction={"row"}
                    flexWrap={'nowrap'}
                    width={'200%'}
                >
                    <Grid2
                        width={'100%'}
                        padding={1}
                    >
                        <Grid2>
                            <Typography fontWeight={'bold'} variant="h5" textAlign={'center'}>Welcome!</Typography>
                            <Typography marginTop={2} color={color_font_grey} variant="body2" textAlign={'center'}>Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt.</Typography>
                            <Stack
                                marginTop={5}
                                spacing={1}
                            >
                                <Button 
                                    fullWidth 
                                    variant="contained"
                                    style={{borderRadius : 100, textTransform : 'none'}}
                                    onClick={()=>{fnMakeFamily()}}
                                >Make a my family</Button>
                                <Button 
                                    fullWidth 
                                    variant="text"
                                    style={{borderRadius : 100, textTransform : 'none'}}
                                    onClick={()=>{fnJoinFamily()}}
                                >I have an invitation code</Button>
                            </Stack>
                        </Grid2>
                    </Grid2>
                    <Grid2
                        display={mode==='join' ? 'block' : 'none'}
                        width={'100%'}
                        padding={1}
                    >
                        <JoinFamilyWidget
                            onCancel={fnHome}
                        />
                    </Grid2>
                    <Grid2
                        display={mode==='make' ? 'block' : 'none'}
                        width={'100%'}
                    >
                        <MakeFamilyWidget
                            onCancel={fnHome}
                        />
                    </Grid2>
                </Stack>
            </div>
        </Grid2>
        
    )
}