import { useEffect, useState } from "react";

export function useDebouceValue(value : any, delay : number){
    const [debouncedValue, setDeboucedValue] = useState(value);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDeboucedValue(value);
        },delay)

        return ()=>{clearTimeout(timer)};
    },[value]);

    return debouncedValue;
}