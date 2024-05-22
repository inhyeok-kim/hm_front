import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ItemSearchBar from "../../modules/item/widgets/ItemSearchBar";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function ItemListPage({
    onClose
}:{
    onClose : Function
}){

    return (
        <Grid2>
            <Grid2
                width={'100%'}
                padding={2}
                paddingY={4}
                top={0}
                height={90}
                container
                justifyContent={'space-between'}
                bgcolor={'white'}
                // borderBottom={'1px solid #e3e3e3'}
                zIndex={3}
            >
                <Grid2
                    width={'20%'}
                    paddingX={2}
                    textAlign={'center'}
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
                    paddingX={2}
                    textAlign={'center'}
                >
                    <IconButton>
                        <AddIcon
                            color="primary"
                        />
                    </IconButton>
                </Grid2>
            </Grid2>
            <Grid2 
                paddingTop={8}
                paddingBottom={5}
            >
            </Grid2>
        </Grid2>
    )

}