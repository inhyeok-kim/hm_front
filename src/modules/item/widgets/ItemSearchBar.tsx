import {  IconButton, Portal, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Page from "../../../pages/Page";
import CloseIcon from '@mui/icons-material/Close';
import { ChangeEvent,  useEffect, useState } from "react";
import { useDebouceValue } from "../../../utils/hooks/Debounce";
import itemAPI from "../api/ItemApi";
import ItemList from "./ItemList";
import { Item } from "../ItemType";
import ItemDetailPage from "../../../pages/item/ItemDetailPage";
import { useRouter } from "../../../pages/AppRouter";


export default function ItemSearchBar(){
    const [open, setOpen] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
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
                    value={searchKeyword}
                    inputProps={{
                        onClick:(e)=>{
                            setOpen(true);
                            e.preventDefault();
                        }
                    }}
                />
                {
                    open ? 
                    <ItemSearchPage value={searchKeyword} onChange={(value : string)=>{setSearchKeyword(value)}} onClose={()=>{setOpen(false)}} />
                    :''
                }
        </Grid2>
    )

}

function ItemSearchPage({
    onClose,
    value,
    onChange
}:{
    onClose : Function
    value : string
    onChange : Function
}){

    const [searchList, setSearchList] = useState<Item[]>([]);

    const router = useRouter();

    function changeHandler(e : ChangeEvent<HTMLInputElement>){
        onChange(e.currentTarget.value);
    }
    
    const defferedValue = useDebouceValue(value,500);
    useEffect(()=>{
        itemAPI.searchItem(defferedValue).then(data=>{
            setSearchList(data.data.data)
        });
    },[defferedValue]);

    return (
        <Portal>
            <Page>
                <Grid2
                    width={'100vw'}
                    height={'100vh'}
                    bgcolor={'white'}
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
                                <CloseIcon
                                    fontSize="small"
                                    color="primary"
                                />
                            </IconButton>
                        </Grid2>
                        <Grid2
                            width={'50%'}
                        >
                            <TextField
                                fullWidth
                                placeholder="Search"
                                variant="filled"
                                InputProps={{disableUnderline : true,style:{borderRadius : '100px'}}}
                                hiddenLabel
                                size="small"
                                autoFocus
                                value={value}
                                onChange={changeHandler}
                            />
                        </Grid2>
                        <Grid2
                            width={'20%'}
                            textAlign={'right'}
                        >
                        </Grid2>
                    </Grid2>
                    <Grid2
                        maxHeight={'calc(100% - 80px)'}
                        overflow={'scroll'}
                        paddingBottom={5}
                        sx={{scrollbarWidth:'none','&::-webkit-scrollbar' : { display:'none'}}}
                    >
                        {searchList && searchList.length > 0 ?
                            <ItemList list={searchList}
                                onItemClick={(id:number)=>{
                                    onClose();
                                    router.pushPage(<ItemDetailPage id={id} />)
                                }}
                            />
                            :''
                        }
                    </Grid2>
                </Grid2>
            </Page>
        </Portal>

    )
}