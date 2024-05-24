import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useDevice } from "../../utils/hooks/DeviceHooks";
import ItemStack from "../../modules/item/widgets/ItemStack";
import ItemSearchBar from "../../modules/item/widgets/ItemSearchBar";
import { Box, Button, Divider, IconButton, Modal, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ItemListPage from "./ItemListPage";
import { useState } from "react";
import BasicMobileLayout from "../../layout/BasicMobileLayout";
import { useRouter } from "../AppRouter";
import ItemDetailPage from "./ItemDetailPage";
import Page from "../Page";
import BasicTabletLayout from "../../layout/BasicTabletLayout";
import ItemList from "../../modules/item/widgets/ItemList";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { color_green } from "../../utils/style/hmstyle";
import ItemFormWidget from "../../modules/item/widgets/ItemFormWidget";
import CloseIcon from '@mui/icons-material/Close';

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
                                onClick={()=>{router.pushPage(<ItemDetailPage isNew />)}}
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
                        <ItemStack headerName="Food" onMore={()=>{router.pushPage(<ItemListPage/>)}} />
                        <ItemStack headerName="Consumables" onMore={()=>{router.pushPage(<ItemListPage/>)}} />
                        <ItemStack headerName="Furniture" onMore={()=>{router.pushPage(<ItemListPage/>)}} />
                        <ItemStack headerName="Living" onMore={()=>{router.pushPage(<ItemListPage/>)}} />
                    </Grid2>
                </Grid2>
            </BasicMobileLayout>
        </Page>
    )
}

function ItemPageForTablet(){
    const [sideOpen, setSideOpen] = useState(false);


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
                                <IconButton>
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
                            <ItemStack headerName="Food" onMore={()=>{setSideOpen(true)}} />
                            <ItemStack headerName="Consumables" onMore={()=>{}} />
                            <ItemStack headerName="Furniture" onMore={()=>{}} />
                            <ItemStack headerName="Living" onMore={()=>{}} />
                        </Grid2>
                    </Grid2>
                    <Grid2
                        sx={{transition : 'width 0.3s'}}
                        width={sideOpen ? '22rem' : '0px'}
                        height={'100%'}
                        borderLeft={sideOpen ? '1px solid ' + color_green : ''}
                    >  
                        <ItemListForTablet onClose={()=>{setSideOpen(false)}} />
                    </Grid2>
                </Grid2>
            </BasicTabletLayout>
        </Page>
    )
}

function ItemListForTablet({
    onClose
}:{
    onClose : Function
}){
    const [modalOpen, setModalOpen] = useState(false);

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
                        onClick={()=>{setModalOpen(true)}}
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
                    fontWeight={"500"} variant="h5">Food</Typography>
                <Grid2
                    overflow={'scroll'}
                    height={'calc(100% - 64px)'}
                    sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
                >
                    <ItemList />
                </Grid2>
            </Grid2>
            <ItemDetailModal  open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
        </Grid2>
    )
}


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

function ItemDetailModal({
    open
    ,onClose
    ,isNew
}:{
    open : boolean
    onClose : Function
    isNew? : boolean
}){

    return (
        <Modal
            open={open}
            onClose={()=>{onClose}}
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
                        <Button style={{textTransform : 'none'}}>Save</Button>
                    </Grid2>
                </Grid2>
                <Grid2>
                    <ItemFormWidget />
                </Grid2>
                {   isNew?
                    ''
                    :
                    <Grid2
                        width={'100%'}
                        paddingX={2}
                        textAlign={'right'}
                    >
                        <Button style={{textTransform : 'none'}}>Delete</Button>
                    </Grid2>
                }
            </Box>
        </Modal>
    )
}