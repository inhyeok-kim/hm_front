import { AppRouter } from "./AppRouter";
import HomePage from "./home/HomePage";
import ItemPage from "./item/ItemPage";

export default function Root(){
    // useEffect(()=>{
    //     loginCheck();
    // },[]);
    return (
        <AppRouter initStack={[
            [<HomePage/>],
            [<ItemPage/>],
            [<HomePage/>],
            [<HomePage/>]
        ]} />
    )
}