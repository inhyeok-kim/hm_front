import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import RegistFamilySelectWidget from "../../modules/family/widgets/RegistFamilySelectWidget";
import RegistFamilyCreateWidget from "../../modules/family/widgets/RegistFamilyCreateWidget";
import RegistFamilyJoinWidget from "../../modules/family/widgets/RegistFamilyJoinWidget";
import { useDevice } from "../../utils/hooks/DeviceHooks";
import { useEffect, useRef, useState } from "react";
import { blueGrey, grey } from "@mui/material/colors";

export default function NonFamilyPage(){
    const {isMobile, isPc,isTablet} = useDevice();
    const [step, setStep] = useState(0);
    const [isCreate, setIsCreate] = useState(false);
    const wrapper = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{
        onStep(step);
    },[step]);

    function onStep(step : number){
        if(wrapper.current){
            const div = wrapper.current;
            const count = div.children.length;
            div.style.transform = `translateX(-${div.scrollWidth* (step/count)}px)`;
        }
    }

    function onCreate(){
        setIsCreate(true);
        setStep((curr)=>curr+1);
    }
    function onJoin(){
        setIsCreate(false);
        setStep((curr)=>curr+1);
    }

    function onNext(){
        setStep((curr)=>curr+1);
    }

    function onPrev(){
        setStep((curr)=>curr-1);
    }
    
    return (
        <Grid2
            container
            width={'100%'}
            height={'100%'}
            justifyContent={"center"}
            alignItems={"center"}
            bgcolor={isMobile ? '' : blueGrey[50]}
        >
            <Grid2
                overflow={'hidden'}
                width={isMobile ? '90%' : 400}
                height={330}
                bgcolor={"white"}
                borderRadius={3}
                border={isMobile ? '' : 1}
                borderColor={isMobile ? '' : grey[300]}
            >
                <Grid2
                    ref={wrapper}
                    whiteSpace={'nowrap'}
                    position={'relative'}
                    sx={{transition : 'transform 0.5s'}}
                >
                    <Grid2 
                        container
                        justifyContent={'center'}
                        width={isMobile ? '90%' : 400}
                        marginRight={'20%'}
                        padding={'10%'}
                        display={"inline-block"} 
                        sx={{float : 'left'}}
                    >
                        <RegistFamilySelectWidget onCreate={onCreate} onJoin={onJoin} />
                    </Grid2>
                    <Grid2 
                        container
                        justifyContent={'center'}
                        width={isMobile ? '90%' : 400}
                        marginRight={'20%'}
                        padding={'10%'}
                        display={"inline-block"} 
                    >
                        {
                            isCreate ? 
                            <RegistFamilyCreateWidget onNext={onNext} onPrev={onPrev} />
                            :
                            <RegistFamilyJoinWidget onNext={onNext} onPrev={onPrev} />
                        }
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>    
    )
}