import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "../auth-reduser";
import {appReducer} from "./app-reducer";
import {profileReducer} from "../profile-reducer";
import {loginReducer} from "../login-reducer";
import {passwordReducer} from "../password-reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
    profile: profileReducer,
    app: appReducer,
    password: passwordReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;