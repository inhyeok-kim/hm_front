import { Box, Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { grey } from "@mui/material/colors";
import { useRouter } from "../../../pages/AppRouter";
import ItemDetailPage from "../../../pages/item/ItemDetailPage";
import { useEffect } from "react";
import { Item } from "../ItemType";

export default function ItemStack({
    headerName
    ,list
    ,onMore
    ,onItemClick = ()=>{}
}:{
    headerName : string
    ,list : Item[]
    onMore : Function
    onItemClick? : Function
}){
    const router = useRouter();

    return(
        <Grid2
            maxWidth={'100%'}
            width={'fit-content'}
        >
            <Grid2
                container
                justifyContent={'space-between'}
            >
                <Typography padding={2} fontWeight={"500"} variant="h5">{headerName}</Typography>
                <Button variant="text" style={{textTransform:'none'}} onClick={()=>{onMore()}}>More</Button>
            </Grid2>
            <Grid2
                width={'100%'}
                overflow={'scroll'}
                sx={{
                    scrollbarWidth : 'none',
                }}
            >
                <Grid2
                    whiteSpace={"nowrap"}
                    paddingLeft={2}
                >
                    {
                        list.map((item)=>(
                            <Grid2
                                key={item.id}
                                display={'inline-block'}
                                width={'6rem'}
                                marginRight={2}
                                
                                onClick={()=>{onItemClick(item.id)}}
                            >
                                <Box
                                    width={'6rem'}
                                    height={'6rem'}
                                    sx={{backgroundImage : item.thumbnail ? 'url("'+item.thumbnail+'")' : '',backgroundSize : 'cover'}}
                                    bgcolor={grey[300]}
                                    borderRadius={2}
                                ></Box>
                                <Typography variant="subtitle2">{item.name!}</Typography>
                            </Grid2>
                        ))
                    }
                </Grid2>
            </Grid2>
        </Grid2>
    )
}