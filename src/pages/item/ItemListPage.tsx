import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ItemSearchBar from "../../modules/item/widgets/ItemSearchBar";
import { IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ItemList from "../../modules/item/widgets/ItemList";

export default function ItemListPage({
    onClose
}:{
    onClose : Function
}){

    return (
        <Grid2
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
                        onClick={()=>{onClose()}}
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
                <Typography padding={2} fontWeight={"500"} variant="h5">Food</Typography>
                <ItemList />
            </Grid2>
        </Grid2>
    )

}