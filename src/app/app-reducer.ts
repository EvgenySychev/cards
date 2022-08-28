import {Dispatch} from "redux";
import {authAPI} from "../api/cards-api";
import {setIsLoggedInAC} from "../features/auth-reducer";

const initialState: InitialStateType = {
    isInitialized: false
}

type InitialStateType = {
    isInitialized: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "APP":
            return {...state}
        case "APP/SET-IS-INITIALIZED":
            return {...state,isInitialized:action.isInitialized}
        default:
            return state
    }
}

export const appAC = () => ({type: 'APP'} as const)
export const setAppInitializedAC = (isInitialized: boolean) => ({type: 'APP/SET-IS-INITIALIZED', isInitialized} as const)

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
        })
        .finally(()=>{
            dispatch(setAppInitializedAC(true))
        })
}

export type appACType = ReturnType<typeof appAC>
export type setAppInitializedActionType = ReturnType<typeof setAppInitializedAC>

type ActionsType =
    | appACType
    | setAppInitializedActionType