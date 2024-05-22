import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ReactNode, createContext, useContext, useState } from "react"

const RouterContext = createContext<any>(null);

export function AppRouter({
    initStack,
}:{
    initStack : ReactNode[][]
}){
    const [stack, setStack] = useState<ReactNode[][]>(initStack);
    const [activeStackNumber, setActiveStackNumber] = useState<number>(0);

    return (
        <RouterContext.Provider value={{stack,setStack,activeStackNumber,setActiveStackNumber}}>
            <RouterProvier/>
        </RouterContext.Provider>
    )
}

function RouterProvier(){
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
    const {stack} = useContext(RouterContext);
    return stack;
}

export function useRouter(){
    const {stack,setStack,activeStackNumber,setActiveStackNumber} = useContext(RouterContext);

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
        ,goStack : function(num : number){
            setActiveStackNumber(num);
        }
    }
    return func
}
