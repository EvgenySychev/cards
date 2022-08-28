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
    isLoggedIn: false
}

type LoginType = {
    isLoggedIn: boolean
}

type InitialStateType = LoginType & ResponseType

export const authReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "login/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value}
        case "profile/SET-PROFILE-DATA":
            return {
                ...state,
                email:action.data.data.email,
                name:action.data.data.name,
                publicCardPacksCount:action.data.data.publicCardPacksCount,
                avatar: action.data.data.avatar
            }

        default:
            return state
    }
}

export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setProfileAC = (data: AxiosResponse<ResponseType, any>) => ({type: 'profile/SET-PROFILE-DATA', data} as const)

export const LoginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    //dispatch()
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setProfileAC(res))
        })
        .catch((e) => {

        })
}

export type loginACType = ReturnType<typeof setIsLoggedInAC>
export type setProfileACType = ReturnType<typeof setProfileAC>

type ActionsType =
    | loginACType
    | setProfileACType