import { TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


export default function ItemSearchBar(){
    return (
        <Grid2
            width={'100%'}
        >
            <TextField
                fullWidth
                placeholder="Search"
                variant="filled"
                InputProps={{disableUnderline : true,style:{borderRadius : '100px'}}}
                hiddenLabel
                size="small"
            />
        </Grid2>
    )

}