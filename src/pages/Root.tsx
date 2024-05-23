import { useDevice } from "../utils/hooks/DeviceHooks";
import { AppRouter, RouterOutlet } from "./AppRouter";
import Page from "./Page";
import HomePage from "./home/HomePage";
import ItemPage from "./item/ItemPage";
import BasicMobileLayout from "./layout/BasicMobileLayout";
import BasicTabletLayout from "./layout/BasicTabletLayout";

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
                    <BasicMobileLayout>
                        <RouterOutlet/>
                    </BasicMobileLayout>
                :
                    <BasicTabletLayout>
                        <RouterOutlet/>
                    </BasicTabletLayout>
            }
            
        </AppRouter>
    )
}