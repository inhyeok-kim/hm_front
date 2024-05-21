import { Button, FormControl, Stack, TextField, Typography, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useRef, useState } from "react";
import { color_font_grey } from "../../../utils/color/hmcolor";
import { grey } from "@mui/material/colors";
import { useDevice } from "../../../utils/hooks/DeviceHooks";

export default function JoinFamilyWidget({
    onCancel
} : {
    onCancel : Function
}){
    const {isMobile} = useDevice();
    const containerRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(0);

    const [open, setOpen] = useState(false);

    function fnSubmit(){
        if(isMobile){
            setOpen(true);
        } else {
            setStep(1);
            if(containerRef.current){
                containerRef.current.style.transform='translate(-100%)'
            }
        }
    }

    function fnFinishRequest(){
        if(isMobile){
            setOpen(false);
            if(containerRef.current){
                containerRef.current.style.transform='translate(-100%)'
            }
        } else {
            setTimeout(()=>{
                setStep(2);
            },200);
            if(containerRef.current){
                containerRef.current.style.transform='translate(-200%)'
            }
        }
        
    }

    return (
        <Grid2
            width={'100%'}
            height={'100%'}
            overflow={'hidden'}
        >
            <div
                ref={containerRef}
                style={{
                    height:'100%',
                    transition : 'transform 0.5s'
                }}
            >
                <Stack
                    direction={"row"}
                    flexWrap={'nowrap'}
                    width={!isMobile ? `300%` : '200%'}
                    height={'100%'}
                >
                    <Grid2
                        width={'100%'}
                        height={'100%'}
                        padding={1}
                    >
                        <Stack
                            height={'100%'}
                            direction={"column"}
                            justifyContent={"space-between"}
                        >
                            <Grid2>
                                <Typography fontWeight={'bold'} variant="h5" textAlign={'center'}>Join Family</Typography>
                            </Grid2>
                            <Grid2>
                                <FormControl fullWidth>
                                    <TextField
                                        InputProps={{disableUnderline : true, style:{borderRadius : '8px'}}}
                                        size="small" 
                                        label='Invitation Code' 
                                        variant="filled" 
                                        // value={id} 
                                        // onChange={(e)=>{setId(e.currentTarget.value)}} 
                                        margin="dense" />
                                </FormControl>
                            </Grid2>
                            <Grid2>
                                <Stack
                                    marginTop={5}
                                    spacing={1}
                                >
                                    <Button 
                                        fullWidth 
                                        variant="contained"
                                        style={{borderRadius : 100, textTransform : 'none'}}
                                        onClick={()=>{fnSubmit()}}
                                    >Submit</Button>
                                    <Button 
                                        fullWidth 
                                        variant="text"
                                        style={{borderRadius : 100, textTransform : 'none'}}
                                        onClick={()=>{onCancel()}}
                                    >Go back</Button>
                                </Stack>
                            </Grid2>
                        </Stack>
                    </Grid2>
                    {
                        !isMobile ? 
                        <Grid2
                            width={'100%'}
                            height={'100%'}
                            padding={1}
                        >
                            {
                                step===1 ?
                                <ComfirmWidget submitHandler={fnFinishRequest} cancelHandler={()=>{
                                    if(containerRef.current){
                                        containerRef.current.style.transform='translate(0%)';
                                        setTimeout(()=>{
                                            setStep(0);
                                        },200);
                                    }
                                }}/>
                                :''
                            }
                        </Grid2>
                        :''
                    }
                    <Grid2
                        width={'100%'}
                        height={'100%'}
                        padding={1}
                    >
                        <Congratulation/>
                    </Grid2>
                </Stack>
            </div>
            <ComfirmDrawerWidget open={open} setOpen={setOpen} submitHandler={fnFinishRequest}/>
        </Grid2>
    )
}

const Puller = styled('div')(({ theme }) => ({
    width: 40,
    height: 5,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 15,
    left: 'calc(50% - 20px)',
  }));

function ComfirmDrawerWidget({
    open
    ,setOpen
    ,submitHandler
}:{
    open : boolean
    ,setOpen : Function
    ,submitHandler : Function
}){
    return (
        <SwipeableDrawer
            container={window.document.body}
            open={open}
            anchor="bottom"
            onClose={()=>{setOpen(false)}}
            onOpen={()=>{setOpen(true)}}
            swipeAreaWidth={56}
            SlideProps={{
                style:{
                    borderTopRightRadius : 8,
                    borderTopLeftRadius : 8,
                }
            }}
        >
            <Puller/>
            <Grid2
                padding={3}
                marginTop={1}
            >
                <Stack
                    height={'100%'}
                    direction={"column"}
                    justifyContent={"space-between"}
                    spacing={2}
                >
                    <Grid2>
                        <Typography fontWeight={'bold'} variant="h5" textAlign={'center'}>Check Information</Typography>
                    </Grid2>
                    <Grid2>
                        <Typography textAlign={'center'} color={color_font_grey} variant="body2">Make sure the information of the invited family matches</Typography>
                    </Grid2>
                    <Grid2>
                        <FormControl fullWidth>
                            <TextField
                                InputProps={{style:{borderRadius : '8px'}}}
                                disabled
                                defaultValue={"김씨네패밀리"}
                                size="small" 
                                label='Family name' 
                                variant="standard" 
                                // value={id} 
                                // onChange={(e)=>{setId(e.currentTarget.value)}} 
                                margin="dense" />
                            <TextField
                                InputProps={{style:{borderRadius : '8px'}}}
                                disabled
                                defaultValue={"김사장"}
                                size="small" 
                                label='Family head' 
                                variant="standard" 
                                // value={id} 
                                // onChange={(e)=>{setId(e.currentTarget.value)}} 
                                margin="dense" />
                        </FormControl>
                    </Grid2>
                    <Grid2>
                        <Stack
                            marginTop={3}
                            spacing={1}
                        >
                            <Button 
                                fullWidth 
                                variant="contained"
                                style={{borderRadius : 100, textTransform : 'none'}}
                                onClick={()=>{submitHandler()}}
                            >OK</Button>
                            <Button 
                                fullWidth 
                                variant="text"
                                style={{borderRadius : 100, textTransform : 'none'}}
                                onClick={()=>{setOpen(false)}}
                            >Cancel</Button>
                        </Stack>
                    </Grid2>
                </Stack>
            </Grid2>
        </SwipeableDrawer>
    )
}

function ComfirmWidget({
    cancelHandler
    ,submitHandler
}:{
    cancelHandler : Function
    ,submitHandler : Function
}){

    return (
        <Stack
            height={'100%'}
            direction={"column"}
            justifyContent={"space-between"}
            spacing={2}
        >
            <Grid2>
                <Typography fontWeight={'bold'} variant="h5" textAlign={'center'}>Check Information</Typography>
            </Grid2>
            <Grid2>
                <Typography textAlign={'center'} color={color_font_grey} variant="body2">Make sure the information of the invited family matches</Typography>
            </Grid2>
            <Grid2>
                <FormControl fullWidth>
                    <TextField
                        InputProps={{style:{borderRadius : '8px'}}}
                        disabled
                        defaultValue={"김씨네패밀리"}
                        size="small" 
                        label='Family name' 
                        variant="standard" 
                        // value={id} 
                        // onChange={(e)=>{setId(e.currentTarget.value)}} 
                        margin="dense" />
                    <TextField
                        InputProps={{style:{borderRadius : '8px'}}}
                        disabled
                        defaultValue={"김사장"}
                        size="small" 
                        label='Family head' 
                        variant="standard" 
                        // value={id} 
                        // onChange={(e)=>{setId(e.currentTarget.value)}} 
                        margin="dense" />
                </FormControl>
            </Grid2>
            <Grid2>
                <Stack
                    marginTop={3}
                    spacing={1}
                >
                    <Button 
                        fullWidth 
                        variant="contained"
                        style={{borderRadius : 100, textTransform : 'none'}}
                        onClick={()=>{submitHandler()}}
                    >OK</Button>
                    <Button 
                        fullWidth 
                        variant="text"
                        style={{borderRadius : 100, textTransform : 'none'}}
                        onClick={()=>{cancelHandler()}}
                    >Cancel</Button>
                </Stack>
            </Grid2>
        </Stack>
    )
}

function Congratulation(){

    return (
        <Stack
            height={'100%'}
            direction={"column"}
            justifyContent={"space-between"}
        >
            <Grid2>
                <Typography fontWeight={'bold'} variant="h5" textAlign={'center'}>Join Family</Typography>
            </Grid2>
            <Grid2>
                <Typography marginTop={4} color={color_font_grey} variant="body2" textAlign={'center'}>You have successfully requested a join. If you wait, the family head will check and approve the request, and the join will be completed.</Typography>
            </Grid2>
            <Grid2>
                <Stack
                    marginTop={5}
                >
                    <Button 
                        fullWidth 
                        variant="text"
                        style={{borderRadius : 100, textTransform : 'none'}}
                    >I want to cancel the join request</Button>
                </Stack>
            </Grid2>
        </Stack>
    )
}