import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ItemSearchBar from "../../modules/item/widgets/ItemSearchBar";
import { Button, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ItemList from "../../modules/item/widgets/ItemList";
import Page, { PageRef } from "../Page";
import { useRef } from "react";
import ItemFormWidget from "../../modules/item/widgets/ItemFormWidget";

export default function ItemDetailPage({
    isNew
}:{
    isNew? : boolean
}){
    const pageRef = useRef<PageRef>();

    return (
        <Page ref={pageRef} isSlide>
            <Grid2
                width={'100vw'}
                height={'calc(100vh - 81px)'}
                bgcolor={'white'}
            >
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
                        padding={2}
                        textAlign={'right'}
                    >
                        <Button style={{textTransform : 'none'}}>Delete</Button>
                    </Grid2>
                }
            </Grid2>
        </Page>
    )

}