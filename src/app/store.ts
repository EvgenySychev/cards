import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction,ThunkDispatch} from 'redux-thunk'
import {authReducer} from "../features/auth-reducer";
import {appReducer} from "./app-reducer";
//import {profileReducer} from "../features/profile-reducer";
import {passwordReducer} from "../features/password-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
 //   profile: profileReducer,
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

// @ts-ignore
window.store = store;