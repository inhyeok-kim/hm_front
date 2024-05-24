import { RouterOutlet, useLocation } from "../pages/AppRouter";
import BottomNav from "../layout/BottomNav";

export default function BasicMobileContainer(){
    const location = useLocation();
    return (
        <>
            <RouterOutlet />
            <BottomNav menu={location.menu}/>
        </>
    )
}