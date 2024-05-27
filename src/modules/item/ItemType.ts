export type ItemClassType = 'FOOD' | 'LIVING' | 'FURNITURE' | 'CONSUMABLES'

export const ItemClassType = {
    food : 'FOOD' as ItemClassType,
    living : 'LIVING' as ItemClassType,
    furniture : 'FURNITURE' as ItemClassType,
    consumables : 'CONSUMABLES' as ItemClassType
}

export type ItemType = "CONSUMABLES" | 'PERMANENT'

export interface Item {
    id? : number
    name : string
    familyId? : number
    count : number
    type : ItemType
    classType : ItemClassType
}