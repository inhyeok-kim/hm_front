import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { grey } from "@mui/material/colors";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { color_light_grey, color_white_grey } from "../../../utils/style/hmstyle";
import { Item } from "../ItemType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import itemAPI from "../api/ItemApi";
import { useState } from "react";

export default function ItemList({
    list
    ,onItemClick = ()=>{}
}:{
    list : Item[]
    onItemClick? : Function
}){

    return(
        <Grid2
            width={'100%'}
            paddingX={2}
        >
            <Stack
                spacing={1}
                width={'100%'}
            >
                { list.map((item)=>(
                    <ItemListItem onClick={()=>{onItemClick(item.id)}} item={item} key={item.id}/>
                ))}
            </Stack>
        </Grid2>
    )
}

function ItemListItem({
    item,
    onClick
} : {
    item : Item
    onClick : Function
}){

    const queryClient = useQueryClient();
    const countPlusMutation = useMutation({
        mutationFn : (item : {id:number,count:number})=> itemAPI.countPlus(item),
        onSuccess(data, variables, context) {
            queryClient.invalidateQueries({queryKey : ['item',data.data.data.classType]});
        },
    });

    return (
        <Grid2
            container
            width={'100%'}
        >
            <Grid2
                container
                width={'calc(100% - 8rem)'}
                onClick={()=>{onClick()}}
            >
                <Box
                    width={'3rem'}
                    height={'3rem'}
                    sx={{backgroundImage : item.thumbnail ? 'url("'+item.thumbnail+'")' : '',backgroundSize : 'cover'}}
                    bgcolor={grey[300]}
                    borderRadius={2}
                ></Box>
                <Grid2
                    borderBottom={'1px solid '+color_white_grey}
                    marginLeft={'1rem'}
                    width={'calc(100% - 4rem)'}
                    >
                    <Typography
                        textOverflow={"ellipsis"}
                        overflow={'hidden'}
                        whiteSpace={'nowrap'}
                        variant="body1" fontWeight={600}>{item.name}</Typography>
                    <Typography 
                        textOverflow={"ellipsis"}
                        overflow={'hidden'}
                        whiteSpace={'nowrap'}
                        variant="subtitle2">{item.type}</Typography>
                </Grid2>
            </Grid2>
            <Grid2
                borderBottom={'1px solid '+color_white_grey}
                width={'8rem'}
                container
                justifyContent={'end'}
                alignItems={'center'}
            >
                <IconButton
                    onClick={()=>{countPlusMutation.mutate({id : item.id!, count : -1})}}
                ><RemoveCircleIcon sx={{color:color_light_grey}}/></IconButton>
                <Typography textAlign={'center'} width={'2rem'}>{item.count}</Typography>
                <IconButton
                    onClick={()=>{countPlusMutation.mutate({id : item.id!, count : 1})}}
                ><AddCircleIcon color="primary" /></IconButton>
            </Grid2>
        </Grid2>
    )
}