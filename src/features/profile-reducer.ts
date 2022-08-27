import {Dispatch} from "redux";
import {authAPI} from "../api/cards-api";

const InitialState: InitialStateType = {
    email: '',
    name: '',
    publicCardPacksCount: 0
}

const registerData = {
    email: "e.syche87v@yandex.ru",
    password: "123456789"
}

type InitialStateType = {
    email: string;
    name: string;
    publicCardPacksCount: number; // количество колод
}

export const profileReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "PROFILE":
            return {
                ...state,
                email:action.data.email,
                name:action.data.name,
                publicCardPacksCount:action.data.publicCardPacksCount
            }
        default:
            return state
    }
}

export const profileAC = (data: any) => ({type: 'PROFILE', data} as const)

export const profileTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            dispatch(profileAC(res))
        })
}

export const updateNameProfileTC = (model:any) => (dispatch:Dispatch) => {
    authAPI.updateProfile(model)
        .then(res => {
            dispatch(profileAC(res))
        })
}

export const logOutProfileTC = () => (dispatch:Dispatch) => {
    authAPI.logOutProfile()
        .then(res => {
            console.log("logOut success")

        })
}

export const registerTC = () => (dispatch:Dispatch) => {
    authAPI.registration(registerData)
        .then(res=> {
            alert('register success')
        })
}

type ProfileACType = ReturnType<typeof profileAC>

type ActionsType =
    |ProfileACType