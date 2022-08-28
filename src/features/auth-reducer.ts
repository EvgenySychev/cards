import {authAPI, LoginParamsType, ResponseType} from "../api/cards-api";
import {Dispatch} from "redux";
import {AxiosResponse} from "axios";

const InitialState: InitialStateType = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0,// количество колод
    isAdmin: false,
    verified: false, // подтвердил ли почту
    rememberMe: false,

    error: '',
    isLoggedIn: false,
    isInitialized: false
}

type LoginType = {
    isLoggedIn: boolean
}

type isInitializedType = {
    isInitialized: boolean
}

type InitialStateType = LoginType & ResponseType & isInitializedType

export const authReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value}
        case "profile/SET-PROFILE-DATA":
            return {
                ...state,
                email: action.data.data.email,
                name: action.data.data.name,
                publicCardPacksCount: action.data.data.publicCardPacksCount,
                avatar: action.data.data.avatar
            }
        case "APP/SET-IS-INITIALIZED":
            return {...state,isInitialized:action.isInitialized}

        default:
            return state
    }
}

export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setProfileAC = (data: AxiosResponse<ResponseType, any>) => ({
    type: 'profile/SET-PROFILE-DATA',
    data
} as const)

export const setAppInitializedAC = (isInitialized: boolean) => ({
    type: 'APP/SET-IS-INITIALIZED',
    isInitialized
} as const)

export const LoginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setProfileAC(res))
        })
        .catch((e) => {

        })
}

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then((res) => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setProfileAC(res))
        })
        .catch((e) => {
            console.log(e)
        })
        .finally(() => {
            dispatch(setAppInitializedAC(true))
        })
}

export const logOutProfileTC = () => (dispatch: Dispatch<ActionsType>) => {
    authAPI.logOutProfile()
        .then(res => {
            dispatch(setIsLoggedInAC(false))
        })
        .catch((e) => {

        })
}

export type setIsLoggedInType = ReturnType<typeof setIsLoggedInAC>
export type setProfileACType = ReturnType<typeof setProfileAC>
export type setAppInitializedActionType = ReturnType<typeof setAppInitializedAC>

type ActionsType =
    | setIsLoggedInType
    | setProfileACType
    | setAppInitializedActionType