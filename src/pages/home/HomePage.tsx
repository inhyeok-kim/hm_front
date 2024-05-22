import { Box, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { grey } from "@mui/material/colors";
import { useDevice } from "../../utils/hooks/DeviceHooks";
import BasicMobileLayout from "../layout/BasicMobileLayout";

export default function HomePage(){
    const {isMobile} = useDevice();

    return (
        <BasicMobileLayout menu="home">
            <Grid2>
                <Grid2
                    width={'100%'}
                >
                    <Typography padding={2} fontWeight={"500"} variant="h5">Available Menu</Typography>
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
                <Grid2
                    width={'100%'}
                    marginTop={1}
                >
                    <Typography padding={2} fontWeight={"500"} variant="h5">Near Depletion</Typography>
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

                <Grid2
                    width={'100%'}
                    marginTop={1}
                >
                    <Typography padding={1} paddingLeft={2} fontWeight={"600"} variant="body1">오늘의 메뉴 추천</Typography>
                    <Grid2
                        width={'100%'}
                        paddingLeft={2}
                        container
                        spacing={2}
                    >
                        <Grid2
                            display={'inline-block'}
                            width={isMobile ? '50%' : '25%'}
                        >
                            <Box
                                width={'100%'}
                                height={'6rem'}
                                bgcolor={grey[300]}
                                borderRadius={2}
                            ></Box>
                        </Grid2>
                        <Grid2
                            display={'inline-block'}
                            width={isMobile ? '50%' : '25%'}
                        >
                            <Box
                                width={'100%'}
                                height={'6rem'}
                                bgcolor={grey[300]}
                                borderRadius={2}
                            ></Box>
                        </Grid2>
                    </Grid2>
                </Grid2>

            </Grid2>
        </BasicMobileLayout>
    )
}