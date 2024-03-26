import { Button, FormControl, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

interface Props {
    onNext : Function
    onPrev : Function
}
export default function RegistFamilyJoinWidget(props : Props){

    function next(){
        props.onNext();
    }

    function prev(){
        props.onPrev();
    }


    return (
        <Grid2>
            <Typography fontSize={'1rem'} marginBottom={2}>새로운 소속의 정보를 입력해주세요.</Typography>
            <FormControl fullWidth margin="normal">
                <TextField label="CODE" />
            </FormControl>
            <Grid2
                container
                justifyContent={'end'}
            >
                <Button variant="outlined" onClick={prev} sx={{marginRight : 2}}>취소</Button>
                <Button variant="outlined" onClick={next}>요청</Button>
            </Grid2>
        </Grid2>
    )
}