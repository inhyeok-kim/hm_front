import { AppRouter } from "./AppRouter";
import HomePage from "./pages/home/HomePage";
import ItemPage from "./pages/item/ItemPage";
import TestRoot from "./pages/test/TestRoot";

export default function App(){
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