import { Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

interface Props {
    onCreate : Function
    onJoin : Function
}
export default function RegistFamilySelectWidget(props : Props){

    function create(){
        props.onCreate();
    }

    function join(){
        props.onJoin();
    }


    return (
        <>
            <Typography fontSize={'1rem'} margin={2}>아직 소속이 없는 것 같아요.</Typography>
            <Typography fontSize={'0.8rem'} margin={2}>직접 새로운 소속을 만들겠어요?</Typography>
            <Grid2
                container
                justifyContent={'end'}
            >
                <Button variant="outlined" onClick={create}>새로 만들기</Button>
            </Grid2>
            <Typography fontSize={'0.8rem'} margin={2}>이미 있는 소속에 가입 하시겠어요?</Typography>
            <Grid2
                container
                justifyContent={'end'}
            >
                <Button variant="outlined" onClick={join}>가입 요청</Button>
            </Grid2>
        </>
    )
}