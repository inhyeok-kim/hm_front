import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { ReactNode, forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { useRouter } from "./AppRouter"

export type PageRef = {
    close : Function
}

const Page = forwardRef(({
    children,
    isSlide,
    baseLeft = '0px',
    baseTop = '0px',
    direction = 'vertical'
}:{
    children : ReactNode | ReactNode[]
    isSlide? : boolean
    baseLeft? : string
    baseTop? : string
    direction? : 'vertical'| 'horizontal'
},ref)=>{
    const router = useRouter();
    const [left, setLeft] = useState((isSlide && direction ==='vertical') ? '100vw':baseLeft);
    const [top, setTop] = useState((isSlide && direction ==='horizontal') ? '100vh':baseTop);
    useEffect(()=>{
        if(isSlide){
            setTimeout(()=>{
                setLeft('0px');
            },1);
        }
    },[]);

    useImperativeHandle(ref,()=>{
        return {
            close : ()=>{
                if(isSlide){
                    setLeft('100%');
                    setTimeout(() => {
                        router.closePage(); 
                    }, 300);
                } else {
                    router.closePage();
                }
            }
        }
    });

    return (
        <Grid2
            position={'fixed'}
            left={left}
            top={top}
            sx={{
                transition : 'left 0.3s'       
            }}
        >
            {children}
        </Grid2>
    )
});

export default Page;