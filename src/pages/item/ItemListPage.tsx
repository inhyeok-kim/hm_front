import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ItemSearchBar from "../../modules/item/widgets/ItemSearchBar";
import { IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ItemList from "../../modules/item/widgets/ItemList";
import Page, { PageRef } from "../Page";
import { useRef } from "react";
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

    const itemList = useQuery({
        queryKey : ['item',itemClassType]
        ,queryFn : ()=>itemAPI.getItemList(itemClassType)
        ,select : response=>response.data.data.content
    })

    return (
        <Page ref={pageRef} isSlide>
            <BasicMobileLayout>
                <Grid2
                    width={'100%'}
                    padding={2}
                    height={80}
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
                            onClick={()=>{router.pushPage(<ItemDetailPage isNew id={0} />)}}
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
                    height={'calc(100% - 80px)'}
                    sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
                >
                    <Typography 
                        position={'absolute'}
                        bgcolor={'white'}
                        width={'100%'}
                        padding={2} 
                        zIndex={1}
                        fontWeight={"500"} variant="h5">{itemClassType}</Typography>
                    <Grid2
                        marginTop={'4rem'}
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