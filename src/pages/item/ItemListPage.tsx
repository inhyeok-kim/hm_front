import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ItemSearchBar from "../../modules/item/widgets/ItemSearchBar";
import { IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ItemList from "../../modules/item/widgets/ItemList";
import Page, { PageRef } from "../Page";
import { useRef } from "react";

export default function ItemListPage({
}:{
}){
    const pageRef = useRef<PageRef>();

    return (
        <Page ref={pageRef} isSlide>
            <Grid2
                width={'100vw'}
                height={'calc(100vh - 81px)'}
                bgcolor={'white'}
                paddingTop={3}
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
                        <IconButton
                            onClick={()=>{pageRef.current!.close()}}
                        >
                            <ArrowBackIosNewIcon
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
                    <Typography 
                        position={'absolute'}
                        bgcolor={'white'}
                        width={'100%'}
                        padding={2} 
                        zIndex={1}
                        fontWeight={"500"} variant="h5">Food</Typography>
                    <Grid2
                        marginTop={'4rem'}
                    >
                        <ItemList />
                    </Grid2>
                </Grid2>
            </Grid2>
        </Page>
    )

}