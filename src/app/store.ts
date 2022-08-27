import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction,ThunkDispatch} from 'redux-thunk'
import {authReducer} from "../features/auth-reducer";
import {appReducer} from "./app-reducer";
import {profileReducer} from "../features/profile-reducer";
import {loginReducer} from "../features/login-reducer";
import {passwordReducer} from "../features/password-reducer";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
    profile: profileReducer,
    app: appReducer,
    password: passwordReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootStateType,unknown,AnyAction>

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    AnyAction
    >

export const useAppDispatch = () => useDispatch<AppDispatch>()

// @ts-ignore
window.store = store;