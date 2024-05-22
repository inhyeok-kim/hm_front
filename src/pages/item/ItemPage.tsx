import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useDevice } from "../../utils/hooks/DeviceHooks";
import ItemStack from "../../modules/item/widgets/ItemStack";
import ItemSearchBar from "../../modules/item/widgets/ItemSearchBar";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ItemListPage from "./ItemListPage";
import { useState } from "react";
import BasicMobileLayout from "../layout/BasicMobileLayout";
import { useRouter } from "../AppRouter";

export default function ItemPage(){
    const {isMobile} = useDevice();
    
    return (
        <BasicMobileLayout menu="item">
            {
                isMobile?
                <ItemPageForMobile/>
                :
                <ItemPageForTablet/>
            }
        </BasicMobileLayout>
    )    
}

function ItemPageForMobile(){
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <Grid2
            height={'100%'}
        >
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
                        <IconButton>
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
        </Grid2>
    )
}

function ItemPageForTablet(){
    return (
        <Grid2
            width={'100%'}
            height={'100%'}
        >
            <Grid2
                width={'100%'}
                height={'100%'}
            >
                <Grid2
                    width={'100%'}
                    padding={2}
                    paddingY={4}
                    height={90}
                    container
                    bgcolor={'white'}
                    zIndex={1}
                    justifyContent={'space-between'}
                >
                    <Grid2
                        width={'20%'}
                        paddingX={2}
                        textAlign={'center'}
                    >
                        <IconButton>
                            <AddIcon
                                color="primary"
                            />
                        </IconButton>
                    </Grid2>
                    <Grid2
                        width={'50%'}
                    >
                        <ItemSearchBar />
                    </Grid2>
                </Grid2>
                <Grid2
                    height={'calc(100% - 90px)'}
                    overflow={'scroll'}
                    sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
                >
                    <ItemStack headerName="Food" onMore={()=>{}} />
                    <ItemStack headerName="Consumables" onMore={()=>{}} />
                    <ItemStack headerName="Furniture" onMore={()=>{}} />
                    <ItemStack headerName="Living" onMore={()=>{}} />
                </Grid2>
            </Grid2>
        </Grid2>
    )
}