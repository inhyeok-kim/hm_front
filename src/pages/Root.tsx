import { useDevice } from "../utils/hooks/DeviceHooks";
import { AppRouter, RouterOutlet } from "./AppRouter";
import BasicMobileContainer from "../container/BasicMobileContainer";
import HomePage from "./home/HomePage";
import ItemPage from "./item/ItemPage";
import BasicTabletContainer from "../container/BasicTabletContainer";

export default function Root(){
    const {isMobile} = useDevice();
    // useEffect(()=>{
    //     loginCheck();
    // },[]);
    return (
        <AppRouter 
            initStack={[
                [<HomePage/>],
                [<ItemPage/>],
                [<HomePage/>],
                [<HomePage/>],
                [<HomePage/>]
            ]}
            initMenu="home"
        >
            {
                isMobile?
                    <BasicMobileContainer />
                :
                    <BasicTabletContainer />
            }
            
        </AppRouter>
    )
}