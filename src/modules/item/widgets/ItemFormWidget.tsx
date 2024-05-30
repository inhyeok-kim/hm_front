import { Box, FormControl, IconButton, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { grey } from "@mui/material/colors";
import { color_light_grey, color_white_grey } from "../../../utils/style/hmstyle";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Item, ItemClassType, ItemType } from "../ItemType";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import ImageUtils from "../../../utils/com/ImageUtils";

export default function ItemFormWidget({
    initItem,
    onChange
}:{
    initItem : Item,
    onChange : Function
}){
    const [formItem, setFormItem] = useState(initItem);
    const [imageSrc, setImageSrc] = useState('');
    const imgInputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        onChange(formItem);
    },[formItem])
    
    function onChangeName(e:ChangeEvent<HTMLInputElement>){
        const newItem = {...formItem};
        newItem.name = e.currentTarget.value;
        setFormItem(newItem);
    }
    function onChangeClassType(e:SelectChangeEvent){
        const newItem = {...formItem};
        newItem.classType = e.target.value  as ItemClassType
        setFormItem(newItem);
    }
    function onChangeType(e:SelectChangeEvent){
        const newItem = {...formItem};
        newItem.type = e.target.value as ItemType
        setFormItem(newItem);
    }
    function onChangeCount(e:ChangeEvent<HTMLInputElement>){
        const newItem = {...formItem};
        if(e.currentTarget.value === ""){
            newItem.count = 0
        } else {
            newItem.count = parseInt(e.currentTarget.value);
        }
        setFormItem(newItem);
    }
    function countPlus(count : number){
        const newItem = {...formItem};
        newItem.count += count;
        setFormItem(newItem);
    }

    function selectImage(e : ChangeEvent<HTMLInputElement>){
        const files = e.target.files;
        if(files && files.length > 0){
            ImageUtils.resizeImageFile(files[0],200,(dataUrl : string)=>{
                const newItem = {...formItem};
                newItem.thumbnail = dataUrl;
                setFormItem(newItem);
            });
        }
    }

    return(
        <Grid2>
            <Grid2
                container
                justifyContent={'center'}
            >
                <Grid2
                    display={'none'}
                >
                    <input ref={imgInputRef} onChange={selectImage} type="file" accept="image/*" />

                </Grid2>
                <Box
                    width={'6rem'}
                    height={'6rem'}
                    sx={{backgroundImage : formItem.thumbnail ? 'url("'+formItem.thumbnail+'")' : '',backgroundSize : 'cover'}}
                    bgcolor={grey[300]}
                    borderRadius={2}
                    onClick={()=>{
                        if(imgInputRef.current){
                            imgInputRef.current.click();
                        }
                    }}
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
                        value={formItem.name}
                        onChange={onChangeName}
                    />
                </FormControl>
                <Select variant="standard"
                    placeholder="Class Type"
                    displayEmpty
                    autoWidth
                    size="small"
                    style={{marginTop:'0.5rem'}}
                    value={formItem.classType as string}
                    onChange={onChangeClassType}
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
                    value={formItem.type}
                    onChange={onChangeType}
                >
                    <MenuItem dense value="">
                        Type
                    </MenuItem>
                    <MenuItem dense value="CONSUMABLES">
                        소모품
                    </MenuItem>
                    <MenuItem dense value="PERMANENT">
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
                    <IconButton
                        onClick={()=>{countPlus(-1)}}
                    ><RemoveCircleIcon sx={{color:color_light_grey}}/></IconButton>
                    <TextField 
                        style={{width:'3rem'}} 
                        inputProps={{style:{textAlign:'center'}}} 
                        size="small" 
                        hiddenLabel 
                        InputProps={{disableUnderline : true}} 
                        variant="standard" 
                        type="number"
                        value={formItem.count}    
                        onChange={onChangeCount}
                    />
                    <IconButton
                        onClick={()=>{countPlus(1)}}
                    ><AddCircleIcon color="primary" /></IconButton>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}