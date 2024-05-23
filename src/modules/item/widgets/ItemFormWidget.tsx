import { Box, FormControl, IconButton, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { grey } from "@mui/material/colors";
import { color_light_grey, color_white_grey } from "../../../utils/style/hmstyle";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function ItemFormWidget(){
    return(
        <Grid2>
            <Grid2
                container
                justifyContent={'center'}
            >
                <Box
                    width={'6rem'}
                    height={'6rem'}
                    bgcolor={grey[300]}
                    borderRadius={2}
                ></Box>
            </Grid2>
            <Grid2
                padding={4}
            >
                <FormControl
                    fullWidth
                >
                    <TextField 
                        variant="standard"
                        placeholder="Item name"    
                        hiddenLabel
                        size="medium"
                        InputProps={{style:{fontSize:'1.5rem'}}}
                    />
                </FormControl>
                <Select variant="standard"
                    placeholder="Class Type"
                    displayEmpty
                    defaultValue={""}
                    autoWidth
                    size="small"
                    style={{marginTop:'0.5rem'}}
                >
                    <MenuItem dense value="">
                        Class Type
                    </MenuItem>
                    <MenuItem dense value="LIVING">
                        생활용품
                    </MenuItem>
                    <MenuItem dense value="CONSUMABLES">
                        소모품
                    </MenuItem>
                    <MenuItem dense value="FURNITURE">
                        가구/가전
                    </MenuItem>
                    <MenuItem dense value="FOOD">
                        식료품
                    </MenuItem>
                </Select>
                <br/>
                <Select variant="standard"
                    placeholder="Type"
                    displayEmpty
                    defaultValue={""}
                    size="small"
                    style={{marginTop:'0.5rem'}}
                >
                    <MenuItem dense value="">
                        Type
                    </MenuItem>
                    <MenuItem dense value="CONSUMABLES">
                        소모품
                    </MenuItem>
                    <MenuItem dense value="PERMENANT">
                        반영구/영구
                    </MenuItem>
                </Select>
                <Grid2
                    style={{marginTop:'0.5rem'}}
                    borderBottom={'1px solid '+color_white_grey}
                    width={'8rem'}
                    container
                    justifyContent={'start'}
                    alignItems={'center'}
                >
                    <IconButton><RemoveCircleIcon sx={{color:color_light_grey}}/></IconButton>
                    <Typography>1</Typography>
                    <IconButton><AddCircleIcon color="primary" /></IconButton>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}