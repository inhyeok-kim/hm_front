import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Page, { PageRef } from "../Page";
import { useEffect, useRef, useState } from "react";
import ItemFormWidget from "../../modules/item/widgets/ItemFormWidget";
import BasicMobileLayout from "../../layout/BasicMobileLayout";
import { Item, ItemClassType } from "../../modules/item/ItemType";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import itemAPI from "../../modules/item/api/ItemApi";

export default function ItemDetailPage({
    isNew,
    id = 0,
    classType = ItemClassType.consumables
}:{
    isNew? : boolean
    id? : number
    classType? : ItemClassType
}){
    const pageRef = useRef<PageRef>();

    const [editItem, setEditItem] = useState<Item>({
        id : 0,
        classType : classType,
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

    const queryClient = useQueryClient()
    const createItem = useMutation({
        mutationFn : (item : Item)=> itemAPI.createItem(item)
        ,onSuccess : ()=>{
            queryClient.invalidateQueries({queryKey : ['item',editItem.classType]})
        }
    });
    const updateItem = useMutation({
        mutationFn : (item : Item)=> itemAPI.updateItem(item)
        ,onSuccess : ()=>{
            queryClient.invalidateQueries({queryKey : ['item',editItem.classType]})
            queryClient.invalidateQueries({queryKey : ['item',editItem.id]})
        }
    })

    const deleteItem = useMutation({
        mutationFn : (itemId : number)=>itemAPI.deleteItem(itemId)
        ,onSuccess : ()=>{queryClient.invalidateQueries({queryKey : ['item',editItem.classType]})}
    })

    function doSave(){
        if(editItem.id && editItem.id > 0){
            updateItem.mutate(editItem)
        } else {
            createItem.mutate(editItem)
        }
        pageRef.current!.close()
    }
    function doDelete(){
        deleteItem.mutate(editItem.id!)
        pageRef.current!.close()
    }

    return (
        <Page ref={pageRef} isSlide>
            <BasicMobileLayout>
                <Grid2
                    width={'100%'}
                    padding={2}
                    container
                    justifyContent={'space-between'}
                    bgcolor={'white'}
                >
                    <Grid2
                        width={'20%'}
                        textAlign={'left'}
                    >
                        <IconButton
                            onClick={()=>{pageRef.current!.close()}}
                        >
                            <ArrowBackIosNewIcon
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
                                    classType : classType,
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
                        padding={2}
                        textAlign={'right'}
                    >
                        <Button onClick={doDelete} style={{textTransform : 'none'}}>Delete</Button>
                    </Grid2>
                }
            </BasicMobileLayout>
        </Page>
    )

}