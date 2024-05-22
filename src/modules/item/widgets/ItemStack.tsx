import { Box, Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { grey } from "@mui/material/colors";

export default function ItemStack({
    headerName
}:{
    headerName : string
}){

    return(
        <Grid2
            width={'100%'}
        >
            <Grid2
                container
                justifyContent={'space-between'}
            >
                <Typography padding={2} fontWeight={"500"} variant="h5">{headerName}</Typography>
                <Button variant="text" style={{textTransform:'none'}}>More</Button>
            </Grid2>
            <Grid2
                width={'100%'}
                overflow={'scroll'}
                sx={{
                    scrollbarWidth : 'none',
                }}
            >
                <Grid2
                    whiteSpace={"nowrap"}
                    paddingLeft={2}
                >
                    <Grid2
                        display={'inline-block'}
                        width={'6rem'}
                        marginRight={2}
                    >
                        <Box
                            width={'6rem'}
                            height={'6rem'}
                            bgcolor={grey[300]}
                            borderRadius={2}
                        ></Box>
                        <Typography variant="subtitle2">Item #1 name</Typography>
                    </Grid2>
                    <Grid2
                        display={'inline-block'}
                        width={'6rem'}
                        marginRight={2}
                    >
                        <Box
                            width={'6rem'}
                            height={'6rem'}
                            bgcolor={grey[300]}
                            borderRadius={2}
                        ></Box>
                        <Typography variant="subtitle2">Item #1 name</Typography>
                    </Grid2>
                    <Grid2
                        display={'inline-block'}
                        width={'6rem'}
                        marginRight={2}
                    >
                        <Box
                            width={'6rem'}
                            height={'6rem'}
                            bgcolor={grey[300]}
                            borderRadius={2}
                        ></Box>
                        <Typography variant="subtitle2">Item #1 name</Typography>
                    </Grid2>
                    <Grid2
                        display={'inline-block'}
                        width={'6rem'}
                        marginRight={2}
                    >
                        <Box
                            width={'6rem'}
                            height={'6rem'}
                            bgcolor={grey[300]}
                            borderRadius={2}
                        ></Box>
                        <Typography variant="subtitle2">Item #1 name</Typography>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}