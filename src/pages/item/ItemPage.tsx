import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useDevice } from "../../utils/hooks/DeviceHooks";
import { Box, Button, Divider, IconButton, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import ItemStack from "../../modules/item/widgets/ItemStack";
import { color_font_grey } from "../../utils/style/hmstyle";

export default function ItemPage(){
    const {isMobile} = useDevice();

    return (
        <Grid2>
            <Grid2
                position={'absolute'}
                width={'100%'}
                padding={2}
                container
                justifyContent={'space-between'}
                bgcolor={'white'}
                borderBottom={'1px solid #e3e3e3'}
                zIndex={1}
            >
                <TextField
                    placeholder="Search"
                    variant="filled"
                    InputProps={{disableUnderline : true,style:{borderRadius : '100px'}}}
                    hiddenLabel
                    size="small"
                />
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
            <Grid2 paddingTop={8}
            >
                <ItemStack headerName="Food" />
                <ItemStack headerName="Consumables" />
                <ItemStack headerName="Furniture" />
                <ItemStack headerName="Living" />
            </Grid2>
        </Grid2>
    )
}