import AxiosBuilder from "../../../utils/axios/AxiosBuilder";
import { Item, ItemClassType } from "../ItemType";


const itemAxios = AxiosBuilder.getAxiosInstance({
    baseURL : import.meta.env.VITE_DEFAULT_API_SERVER+"/item"
});

const itemAPI = {
    createItem(item : Item){
        if(item.id) item.id = 0;
        return itemAxios.post("",{
            ...item
        });
    }
    ,updateItem(item : Item){
        return itemAxios.put("",{...item});
    },
    getItemList(itemClassType : ItemClassType, page? : number, pageSize? : number, sort? : string){
        const path = "/list";
        return itemAxios.get(path,{
            params : {
                classType : itemClassType,
                page : page ? page : 0,
                size : pageSize ? pageSize : 10,
                sort : sort
            }
        });
    },
    getItem(id : number){
        return itemAxios.get("/"+id);
    }
    ,countPlus({id, count} : {id:number, count:number}){
        return itemAxios.post("/count_plus",{id,count});
    }
    ,deleteItem(id : number){
        return itemAxios.delete("/"+id);
    }

}
export default itemAPI


