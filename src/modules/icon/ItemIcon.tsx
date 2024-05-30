import { ReactNode } from "react"
import ItemIconCollection from "./ItemIconCollection"

export default function ItemIcon({
    iconName
}:{
    iconName : string
}){
    return (
        <>
            {ItemIconCollection[iconName]}
        </>
    )
}