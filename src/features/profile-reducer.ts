import React from "react";
// import { AxiosResponse } from "axios";
// import {Dispatch} from "redux";
// import {authAPI, ResponseType} from "../api/cards-api";
//
// const InitialState: InitialStateType = {
//     _id: '',
//     email: '',
//     name: '',
//     avatar: '',
//     publicCardPacksCount: 0,// количество колод
//     isAdmin: false,
//     verified: false, // подтвердил ли почту
//     rememberMe: false,
//
//     error: '',
// }
//
// const registerData = {
//     email: "e.syche87v@yandex.ru",
//     password: "123456789"
// }
//
// type InitialStateType = {
//     _id: string;
//     email: string;
//     name: string;
//     avatar?: string;
//     publicCardPacksCount: number;// количество колод
//
//     created?: Date;
//     updated?: Date;
//     isAdmin: boolean;
//     verified: boolean; // подтвердил ли почту
//     rememberMe: boolean;
//
//     error?: string;
// }
//
// export const profileReducer = (state: InitialStateType = InitialState, action: ActionsType): InitialStateType => {
//     switch (action.type) {
//         case "PROFILE":
//             return {
//                 ...state,
//                 email:action.data.data.email,
//                 name:action.data.data.name,
//                 publicCardPacksCount:action.data.data.publicCardPacksCount,
//                 avatar: action.data.data.avatar
//             }
//         default:
//             return state
//     }
// }
//
// export const setProfileAC = (data: AxiosResponse<ResponseType, any>) => ({type: 'PROFILE', data} as const)
//
// export const profileTC = () => (dispatch: Dispatch) => {
//     authAPI.me()
//         .then(res => {
//             dispatch(setProfileAC(res))
//         })
// }
//
// export const updateNameProfileTC = (model:any) => (dispatch:Dispatch) => {
//     authAPI.updateProfile(model)
//         .then(res => {
//             dispatch(setProfileAC(res))
//         })
// }
//
// export const logOutProfileTC = () => (dispatch:Dispatch) => {
//     authAPI.logOutProfile()
//         .then(res => {
//             console.log("logOut success")
//
//         })
// }
//
// export const registerTC = () => (dispatch:Dispatch) => {
//     authAPI.registration(registerData)
//         .then(res=> {
//             alert('register success')
//         })
// }
//
// type ProfileACType = ReturnType<typeof setProfileAC>
//
// type ActionsType =
//     |ProfileACType