import { useMediaQuery } from "react-responsive";
import { atom, selector, useSetRecoilState } from "recoil";


const deviceState = atom({
    key : 'device',
    default : {
        isPC : true,
        isMobile : false,
        isTablet : false
    }
});
