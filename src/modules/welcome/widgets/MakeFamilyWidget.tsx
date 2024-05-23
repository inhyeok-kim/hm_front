import { Button, FormControl, Stack, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { color_font_grey } from "../../../utils/style/hmstyle";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function MakeFamilyWidget({
    onCancel
} : {
    onCancel : Function
}){

    const containerRef = useRef<HTMLDivElement>(null);

    function fnSubmit(){
        if(containerRef.current){
            containerRef.current.style.transform='translate(-100%)'
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
                    width={'200%'}
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
                                <Typography fontWeight={'bold'} variant="h5" textAlign={'center'}>Make a Family</Typography>
                            </Grid2>
                            <Grid2>
                                <FormControl fullWidth>
                                    <TextField
                                        InputProps={{disableUnderline : true, style:{borderRadius : '8px'}}}
                                        size="small" 
                                        label='Family name' 
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
                    <Grid2
                        width={'100%'}
                        height={'100%'}
                        padding={1}
                    >
                        <Congratulation/>
                    </Grid2>
                </Stack>
            </div>
        </Grid2>
    )
}

function Congratulation(){
    const navigate = useNavigate();

    return (
        <Stack
            height={'100%'}
            direction={"column"}
            justifyContent={"space-between"}
        >
            <Grid2>
                <Typography fontWeight={'bold'} variant="h5" textAlign={'center'}>Congratulations!</Typography>
            </Grid2>
            <Grid2>
            <Typography marginTop={2} color={color_font_grey} variant="body2" textAlign={'center'}>You have built your family successfully. Now feel free to enjoy the service. Manage your inventory, write recipes, and create menu boards. Your home life will be much easier.</Typography>
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
                        onClick={()=>{navigate('/',{replace : true})}}
                    >Let's Go</Button>
                </Stack>
            </Grid2>
        </Stack>
    )
}