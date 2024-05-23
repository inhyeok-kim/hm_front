import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ReactNode, createContext, useContext, useState } from "react"

const RouterContext = createContext<any>(null);

export function AppRouter({
    children,
    initStack,
    initMenu
}:{
    children : ReactNode | ReactNode[]
    initStack : ReactNode[][]
    initMenu : string
}){
    const [stack, setStack] = useState<ReactNode[][]>(initStack);
    const [activeStackNumber, setActiveStackNumber] = useState<number>(0);
    const [activeMenu, setActiveMenu] = useState<string>(initMenu);

    return (
        <RouterContext.Provider value={{stack,setStack,activeStackNumber,setActiveStackNumber,activeMenu,setActiveMenu}}>
            {children}
        </RouterContext.Provider>
    )
}

export function RouterOutlet(){
    const {stack,activeStackNumber} = useContext(RouterContext);

    return (
        <>
            {stack.map((m : ReactNode[],i : number)=>(
                <RouterStackWrapper
                    key={'stack-'+i}
                    idx={i}
                    stack={m}
                    isActive={activeStackNumber === i}
                />
            ))}
        </>
    )
}
function RouterStackWrapper({
    stack,
    idx,
    isActive
}:{
    stack : ReactNode[]
    idx : number,
    isActive : boolean
}){
    
    return (
        <Grid2
            width={'100%'}
            height={'100%'}
            display={isActive ? 'unset' : 'none'}
        >
            {stack.map((m : ReactNode,i : number)=>(
                <RouterPageWrapper
                    key={'stack-'+idx+'_page-'+i}
                >
                    {m}
                </RouterPageWrapper>
            ))}
        </Grid2>
    )
}

function RouterPageWrapper({children} : {children : ReactNode}){
    return (
        <>
            {children}
        </>
    )
}

export function useLocation(){
    const {stack,activeStackNumber, activeMenu} = useContext(RouterContext);
    return {
        menu : activeMenu,
        stack : stack,
        stackNumber : activeStackNumber
    };
}

export function useRouter(){
    const {stack,setStack,activeStackNumber,setActiveStackNumber,setActiveMenu} = useContext(RouterContext);

    const func = {
        goPage : function(page : ReactNode){
            const ns = [...stack];
            ns[activeStackNumber] = [page];
            setStack(ns);
        }
        ,pushPage : function(page : ReactNode){
            const ns = [...stack];
            ns[activeStackNumber] = [...ns[activeStackNumber],page];
            setStack(ns);
        }
        ,closePage : function(){
            const ns = [...stack];
            ns[activeStackNumber].pop();
            setStack(ns);
        }
        ,goStack : function(num : number, menu : string){
            setActiveStackNumber(num);
            setActiveMenu(menu);
        }
    }
    return func
}

