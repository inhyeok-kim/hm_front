import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { ReactNode, forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { useRouter } from "../AppRouter"

export type PageRef = {
    close : Function
}

const Page = forwardRef(({
    children,
    isSlide,
}:{
    children : ReactNode | ReactNode[]
    isSlide? : boolean
},ref)=>{
    const router = useRouter();

    const [left, setLeft] = useState(isSlide ? '100%':'0px');
    useEffect(()=>{
        if(isSlide){
            setLeft('0px');
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
            sx={{
                transition : 'left 0.3s'       
            }}
        >
            {children}
        </Grid2>
    )
});

export default Page;