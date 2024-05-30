import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useDevice } from "../../utils/hooks/DeviceHooks";
import ItemStack from "../../modules/item/widgets/ItemStack";
import ItemSearchBar from "../../modules/item/widgets/ItemSearchBar";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ItemListPage from "./ItemListPage";
import { useState } from "react";
import BasicMobileLayout from "../../layout/BasicMobileLayout";
import { useRouter } from "../AppRouter";
import ItemDetailPage from "./ItemDetailPage";
import Page from "../Page";
import BasicTabletLayout from "../../layout/BasicTabletLayout";
import { color_green } from "../../utils/style/hmstyle";
import { ItemClassType } from "../../modules/item/ItemType";
import { useQuery } from "@tanstack/react-query";
import ItemListForTablet from "../../modules/item/widgets/ItemListForTablet";
import ItemDetailModal from "../../modules/item/widgets/ItemDetailModal";
import itemAPI from "../../modules/item/api/ItemApi";

export default function ItemPage(){
    const {isMobile} = useDevice();
    
    return (
        <>
            {
                isMobile?
                <ItemPageForMobile/>
                :
                <ItemPageForTablet/>
            }
        </>
    )    
}

function ItemPageForMobile(){
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const foodList = useQuery({
        queryKey : ['item',ItemClassType.food,'summary']
        ,queryFn : ()=>itemAPI.getItemList(ItemClassType.food,0,10,'modifiedAt,desc')
        ,select : response=>response.data.data.content
    })
    const consumeList = useQuery({
        queryKey : ['item',ItemClassType.consumables,'summary']
        ,queryFn : ()=>itemAPI.getItemList(ItemClassType.consumables,0,10,'modifiedAt,desc')
        ,select : response=>response.data.data.content
    })
    const furnitureList = useQuery({
        queryKey : ['item',ItemClassType.furniture,'summary']
        ,queryFn : ()=>itemAPI.getItemList(ItemClassType.furniture,0,10,'modifiedAt,desc')
        ,select : response=>response.data.data.content
    })
    const livingList = useQuery({
        queryKey : ['item',ItemClassType.living,'summary']
        ,queryFn : ()=>itemAPI.getItemList(ItemClassType.living,0,10,'modifiedAt,desc')
        ,select : response=>response.data.data.content
    })

    return (
        <Page>
            <BasicMobileLayout>
                <Grid2
                    height={'100%'}
                >
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
                            {/* <IconButton>
                                <AddIcon
                                    color="primary"
                                />
                            </IconButton> */}
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
                        {
                            foodList.data && foodList.data.length > 0?
                            <ItemStack onItemClick={(id:number)=>{router.pushPage(<ItemDetailPage id={id} />)}} list={foodList.data} headerName="Food" onMore={()=>{router.pushPage(<ItemListPage itemClassType={ItemClassType.food}/>)}} />
                            :''
                        }
                        {
                            consumeList.data && consumeList.data.length > 0?
                            <ItemStack onItemClick={(id:number)=>{router.pushPage(<ItemDetailPage id={id} />)}} list={consumeList.data} headerName="Consumables" onMore={()=>{router.pushPage(<ItemListPage itemClassType={ItemClassType.consumables}/>)}} />
                            :''
                        }
                        {
                            furnitureList.data && furnitureList.data.length > 0?
                            <ItemStack onItemClick={(id:number)=>{router.pushPage(<ItemDetailPage id={id} />)}} list={furnitureList.data} headerName="Furniture" onMore={()=>{router.pushPage(<ItemListPage itemClassType={ItemClassType.furniture}/>)}} />
                            :''
                        }
                        {
                            livingList.data && livingList.data.length > 0?
                            <ItemStack onItemClick={(id:number)=>{router.pushPage(<ItemDetailPage id={id} />)}} list={livingList.data} headerName="Living" onMore={()=>{router.pushPage(<ItemListPage itemClassType={ItemClassType.living}/>)}} />
                            :''
                        }
                    </Grid2>
                </Grid2>
            </BasicMobileLayout>
        </Page>
    )
}

function ItemPageForTablet(){
    const [sideOpen, setSideOpen] = useState(false);
    const [selectedItemClassType, setSelectedItemClassType] = useState<ItemClassType>();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(0);
    function selectItemClassType(itemClassType : ItemClassType){
        setSideOpen(true);
        setSelectedItemClassType(itemClassType);
    }
    function openModal(id : number){
        setSelectedItemId(id);
        setModalOpen(true);
    }


    const foodList = useQuery({
        queryKey : ['item',ItemClassType.food]
        ,queryFn : ()=>itemAPI.getItemList(ItemClassType.food)
        ,select : response=>response.data.data.content
    })
    const consumeList = useQuery({
        queryKey : ['item',ItemClassType.consumables]
        ,queryFn : ()=>itemAPI.getItemList(ItemClassType.consumables)
        ,select : response=>response.data.data.content
    })
    const furnitureList = useQuery({
        queryKey : ['item',ItemClassType.furniture]
        ,queryFn : ()=>itemAPI.getItemList(ItemClassType.furniture)
        ,select : response=>response.data.data.content
    })
    const livingList = useQuery({
        queryKey : ['item',ItemClassType.living]
        ,queryFn : ()=>itemAPI.getItemList(ItemClassType.living)
        ,select : response=>response.data.data.content
    })


    return (
        <Page>
            <BasicTabletLayout>
                <Grid2
                    container
                    width={'100%'}
                    height={'100%'}
                >
                    <Grid2
                        sx={{transition : 'width 0.3s'}}
                        width={sideOpen? 'calc(100% - 22rem)' : '100%'}
                        height={'100%'}
                        paddingTop={2}
                        paddingX={2}
                    >
                        <Grid2
                            padding={2}
                            height={60}
                            paddingBottom={0}
                            container
                            bgcolor={'white'}
                            zIndex={1}
                        >
                            <Grid2
                                maxWidth={'20rem'}
                            >
                                <ItemSearchBar />
                            </Grid2>
                            <Grid2
                                paddingX={2}
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
                            height={'calc(100% - 76px)'}
                            overflow={'scroll'}
                            sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
                        >
                            {
                                foodList.data && foodList.data.length > 0?
                                <ItemStack onItemClick={(id:number)=>{openModal(id)}}  list={foodList.data} headerName="Food" onMore={()=>{selectItemClassType(ItemClassType.food)}} />
                                :''
                            }
                            {
                                consumeList.data && consumeList.data.length > 0?
                                <ItemStack onItemClick={(id:number)=>{openModal(id)}} list={consumeList.data} headerName="Consumables" onMore={()=>{selectItemClassType(ItemClassType.consumables)}} />
                                :''
                            }
                            {
                                furnitureList.data && furnitureList.data.length > 0?
                                <ItemStack onItemClick={(id:number)=>{openModal(id)}} list={furnitureList.data} headerName="Furniture"onMore={()=>{selectItemClassType(ItemClassType.furniture)}} />
                                :''
                            }
                            {
                                livingList.data && livingList.data.length > 0?
                                <ItemStack onItemClick={(id:number)=>{openModal(id)}} list={livingList.data} headerName="Living" onMore={()=>{selectItemClassType(ItemClassType.living)}} />
                                :''
                            }
                        </Grid2>
                    </Grid2>
                    <Grid2
                        sx={{transition : 'width 0.3s'}}
                        width={sideOpen ? '22rem' : '0px'}
                        height={'100%'}
                        borderLeft={sideOpen ? '1px solid ' + color_green : ''}
                    >  
                        {
                            selectedItemClassType ? 
                            <ItemListForTablet itemClassType={selectedItemClassType} onClose={()=>{setSideOpen(false)}} />
                            :
                            ''
                        }
                    </Grid2>
                </Grid2>
                <ItemDetailModal isNew={selectedItemId === 0} id={selectedItemId} open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
            </BasicTabletLayout>
        </Page>
    )
}
