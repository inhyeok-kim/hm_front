import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { grey } from "@mui/material/colors";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { color_light_grey, color_white_grey } from "../../../utils/style/hmstyle";

export default function ItemList({
}:{
}){

    return(
        <Grid2
            width={'100%'}
            paddingX={2}
        >
            <Stack
                spacing={1}
                width={'100%'}
            >
                <ItemListItem />
                <ItemListItem />
                <ItemListItem />
                <ItemListItem />
                <ItemListItem />
                <ItemListItem />
                <ItemListItem />
                <ItemListItem />
                <ItemListItem />
                <ItemListItem />
                <ItemListItem />
                <ItemListItem />
                <ItemListItem />
            </Stack>
        </Grid2>
    )
}

function ItemListItem(){

    return (
        <Grid2
            container
            width={'100%'}
        >
            <Grid2
                container
                width={'calc(100% - 8rem)'}
            >
                <Box
                    width={'3rem'}
                    height={'3rem'}
                    bgcolor={grey[300]}
                    borderRadius={2}
                ></Box>
                <Grid2
                    borderBottom={'1px solid '+color_white_grey}
                    marginLeft={'1rem'}
                    width={'calc(100% - 4rem)'}
                    >
                    <Typography
                        textOverflow={"ellipsis"}
                        overflow={'hidden'}
                        whiteSpace={'nowrap'}
                        variant="body1" fontWeight={600}>Item Name</Typography>
                    <Typography 
                        textOverflow={"ellipsis"}
                        overflow={'hidden'}
                        whiteSpace={'nowrap'}
                        variant="subtitle2">item type</Typography>
                </Grid2>
            </Grid2>
            <Grid2
                borderBottom={'1px solid '+color_white_grey}
                width={'8rem'}
                container
                justifyContent={'end'}
                alignItems={'center'}
            >
                <IconButton><RemoveCircleIcon sx={{color:color_light_grey}}/></IconButton>
                <Typography>10000</Typography>
                <IconButton><AddCircleIcon color="primary" /></IconButton>
            </Grid2>
        </Grid2>
    )
}