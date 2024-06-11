import { IconButton, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import ItemSearchBar from "./ItemSearchBar";
import ItemList from "./ItemList";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import ItemDetailModal from "./ItemDetailModal";
import { Item, ItemClassType } from "../ItemType";
import { useQuery } from "@tanstack/react-query";
import itemAPI from "../api/ItemApi";

export default function ItemListForTablet({
    itemClassType,
    onClose
}:{
    itemClassType :ItemClassType
    onClose : Function
}){
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(0);
    function openModal(id : number){
        setSelectedItemId(id);
        setModalOpen(true);
    }

    const itemList = useQuery({
        queryKey : ['item',itemClassType]
        ,queryFn : ()=>itemAPI.getItemList(itemClassType)
        ,select : response=>response.data.data
    })

    return (
        <Grid2
            minWidth={'350px'}
            width={'22rem'}
            height={'100%'}
            paddingX={2}
        >
            <Grid2
                paddingTop={2}
                height={60}
                container
                paddingBottom={0}
                justifyContent={'space-between'}
                bgcolor={'white'}
            >
                <Grid2
                    width={'20%'}
                    textAlign={'left'}
                >
                    <IconButton
                        onClick={()=>{onClose()}}
                    >
                        <ArrowForwardIosIcon
                            fontSize="small"
                            color="primary"
                        />
                    </IconButton>
                </Grid2>
                <Grid2
                    width={'50%'}
                >
                    <ItemSearchBar />
                </Grid2>
                <Grid2
                    width={'20%'}
                    textAlign={'right'}
                >
                    <IconButton
                        onClick={()=>{openModal(0)}}
                    >
                        <AddIcon
                            color="primary"
                        />
                    </IconButton>
                </Grid2>
            </Grid2>
            <Grid2
                height={'calc(100% - 60px)'}
            >
                <Typography 
                    bgcolor={'white'}
                    padding={2} 
                    zIndex={1}
                    fontWeight={"500"} variant="h5">{itemClassType}</Typography>
                <Grid2
                    overflow={'scroll'}
                    height={'calc(100% - 64px)'}
                    sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
                >
                    <ItemList onItemClick={(id:number)=>{openModal(id)}} list={itemList.data} />
                </Grid2>
            </Grid2>
            <ItemDetailModal isNew={selectedItemId === 0} classType={itemClassType} id={selectedItemId}  open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
        </Grid2>
    )
}