import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ItemSearchBar from "../../modules/item/widgets/ItemSearchBar";
import { IconButton, MenuItem, Select, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ItemList from "../../modules/item/widgets/ItemList";
import Page, { PageRef } from "../Page";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "../AppRouter";
import ItemDetailPage from "./ItemDetailPage";
import BasicMobileLayout from "../../layout/BasicMobileLayout";
import { Item, ItemClassType } from "../../modules/item/ItemType";
import { useQuery } from "@tanstack/react-query";
import itemAPI from "../../modules/item/api/ItemApi";

export default function ItemListPage({
    itemClassType
}:{
    itemClassType : ItemClassType
}){
    const pageRef = useRef<PageRef>();
    const router = useRouter();

    const [order,setOrder] = useState("modifiedAt,desc");

    const itemList = useQuery({
        queryKey : ['item',itemClassType]
        ,queryFn : ()=>itemAPI.getItemList(itemClassType,0,20,order)
        ,select : response=>response.data.data
    })

    useEffect(()=>{
        itemList.refetch();
    },[order]);

    return (
        <Page ref={pageRef} isSlide>
            <BasicMobileLayout>
                <Grid2
                    width={'100%'}
                    paddingX={2}
                    paddingTop={2}
                    height={60}
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
                        <ItemSearchBar />
                    </Grid2>
                    <Grid2
                        width={'20%'}
                        textAlign={'right'}
                    >
                        <IconButton
                            onClick={()=>{router.pushPage(<ItemDetailPage isNew classType={itemClassType} id={0} />)}}
                        >
                            <AddIcon
                                color="primary"
                            />
                        </IconButton>
                    </Grid2>
                </Grid2>
                <Grid2
                    paddingBottom={5}
                    overflow={'scroll'}
                    height={'calc(100% - 60px)'}
                    sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
                >
                    <Grid2
                        position={'absolute'}
                        bgcolor={'white'}
                        width={'100%'}
                        padding={2} 
                        zIndex={1}
                    >
                        <Typography 
                            width={'100%'}
                            fontWeight={"500"} variant="h5">{itemClassType}
                        </Typography>

                        <Grid2
                            container
                            justifyContent={'end'}
                            paddingX={2}
                        >
                            <Select
                                value={order}
                                onChange={(e)=>{setOrder(e.target.value)}}
                                label={'age'}
                                size="small"
                                style={{fontSize : '0.8rem'}}
                                displayEmpty
                                variant="standard"
                            >
                                <MenuItem dense value={"modifiedAt,desc"}>최신순</MenuItem>
                                <MenuItem dense value={"count,desc"}>많은순</MenuItem>
                                <MenuItem dense value={"count,asc"}>적은순</MenuItem>
                            </Select>
                        </Grid2>

                    </Grid2>
                    <Grid2
                        marginTop={'5.5rem'}
                    >
                        {
                            itemList.isSuccess ? 
                            <ItemList list={itemList.data}
                                onItemClick={(id:number)=>{router.pushPage(<ItemDetailPage id={id} />)}}
                            />
                            :
                            ''
                        }
                    </Grid2>
                </Grid2>
            </BasicMobileLayout>
        </Page>
    )
}