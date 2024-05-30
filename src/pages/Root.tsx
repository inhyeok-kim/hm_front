import { useDevice } from "../utils/hooks/DeviceHooks";
import { AppRouter, RouterOutlet } from "./AppRouter";
import BasicMobileContainer from "../container/BasicMobileContainer";
import HomePage from "./home/HomePage";
import ItemPage from "./item/ItemPage";
import BasicTabletContainer from "../container/BasicTabletContainer";
import { useRecoilState, useRecoilValue } from "recoil";
import UserState from "../atom/UserState";
import { useEffect, useState } from "react";
import { getMe } from "../modules/user/api/UserApi";
import { useNavigate } from "react-router-dom";
import SettingPage from "./setting/SettingPage";

export default function Root(){
    const [ready, setReady] = useState(false);
    const [userState, setUserState] = useRecoilState(UserState);
    const {isMobile} = useDevice();

    const navigate = useNavigate();

    useEffect(()=>{
        getMe().then(data=>{
            if(data.code === 0){
                const info = data.data;
                setUserState(userState);
                if(info.familyId === 0){
                    navigate('/welcome',{replace : true})
                } else {
                    setReady(true);
                }
            }
        })
    },[]);

    return (
        <>
            {ready ? 
                <AppRouter 
                    initStack={[
                        [<HomePage/>],
                        [<ItemPage/>],
                        [<HomePage/>],
                        [<HomePage/>],
                        [<SettingPage/>]
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
                :
                ''
            }
        </>
    )
}