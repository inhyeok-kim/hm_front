import { useEffect } from "react";
import {  useRouter } from "../../AppRouter";
import Test from "./Test";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button } from "@mui/material";
import Page from "../Page";

export default function TestRoot(){
    const router = useRouter();

    return (
        <Page>
            <Grid2>
                hello
                <Button onClick={()=>{router.pushPage(<Test/>)}}>go</Button>
                <Button onClick={()=>{router.goStack(1)}}>goHome</Button>
            </Grid2>
        </Page>
    )
}