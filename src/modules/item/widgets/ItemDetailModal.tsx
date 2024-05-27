import { Box, Button, IconButton, Modal } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ItemFormWidget from "./ItemFormWidget";
import CloseIcon from '@mui/icons-material/Close';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Item } from "../ItemType";
import itemAPI from "../api/ItemApi";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30vw',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius : '8px'
  };

export default function ItemDetailModal({
    open
    ,onClose
    ,isNew
    ,id = 0
}:{
    open : boolean
    onClose : Function
    isNew? : boolean
    id? : number
}){
    const [editItem, setEditItem] = useState<Item>({
        id : 0,
        classType : "CONSUMABLES",
        count : 0,
        name : '',
        type : "CONSUMABLES"
    })

    const itemQuery = useQuery({
        queryKey : ['item',id]
        ,queryFn : ()=>itemAPI.getItem(id)
        ,select : response=>response.data.data
        , enabled : !isNew && id > 0 
    })

    useEffect(()=>{
        if(id > 0){
            itemQuery.refetch();
        }
    },[id]);

    const queryClient = useQueryClient()
    const createItem = useMutation({
        mutationFn : (item : Item)=> itemAPI.createItem(item)
        ,onSuccess : ()=>{queryClient.invalidateQueries({queryKey : ['item',editItem.classType]})}
    });
    const updateItem = useMutation({
        mutationFn : (item : Item)=> itemAPI.updateItem(item)
        ,onSuccess : ()=>{
            queryClient.invalidateQueries({queryKey : ['item',editItem.classType]})
            queryClient.invalidateQueries({queryKey : ['item',editItem.id]})
        }
    })

    function doSave(){
        if(editItem.id && editItem.id > 0){
            updateItem.mutate(editItem)
        } else {
            createItem.mutate(editItem)
        }
        onClose();
    }
    function doDelete(){
        
    }

    return (
        <Modal
            open={open}
            onClose={()=>{onClose()}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={style}
            >
                <Grid2
                    width={'100%'}
                    container
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
                            <CloseIcon
                                fontSize="small"
                                color="primary"
                            />
                        </IconButton>
                    </Grid2>
                    <Grid2
                        width={'50%'}
                    >
                        {/* <ItemSearchBar /> */}
                    </Grid2>
                    <Grid2
                        width={'20%'}
                        textAlign={'right'}
                    >
                        <Button onClick={doSave} style={{textTransform : 'none'}}>Save</Button>
                    </Grid2>
                </Grid2>
                <Grid2>
                    {isNew ? 
                        <ItemFormWidget 
                            initItem={{
                                id : 0,
                                classType : "CONSUMABLES",
                                count : 0,
                                name : '',
                                type : "CONSUMABLES"
                            }}
                            onChange={(item : Item)=>{setEditItem(item)}} />
                    :
                        itemQuery.isSuccess ?
                            <ItemFormWidget 
                                initItem={itemQuery.data}
                                onChange={(item : Item)=>{setEditItem(item)}} />
                        :
                            ''
                    }
                </Grid2>
                {   isNew?
                    ''
                    :
                    <Grid2
                        width={'100%'}
                        paddingX={2}
                        textAlign={'right'}
                    >
                        <Button onClick={doDelete} style={{textTransform : 'none'}}>Delete</Button>
                    </Grid2>
                }
            </Box>
        </Modal>
    )
}