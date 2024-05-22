import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";
import Page, { PageRef } from "../Page";
import { useRef } from "react";

export default function Test(){
    const pageRef = useRef<PageRef>(null);

    function close(){
        if(pageRef.current){
            pageRef.current.close();
        }
    }

    return (
        <Page 
            isSlide
            ref={pageRef}
        >
            <Grid2
                width={'100%'}
                height={'100%'}
                bgcolor={'white'}
            >
                hihihi
                <Button onClick={()=>{close()}}>close</Button>
            </Grid2>
        </Page>
    )
}