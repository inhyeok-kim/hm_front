import { atom } from "recoil";

const UserState = atom({
    key : 'userState'
    , default : {} as UserState
})

interface UserState {
    id? : string
    name? : string
    familyId? : number
    familyName? : string
}

export default UserState;