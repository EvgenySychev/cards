import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "../auth-reduser";
import {appReducer} from "./app-reducer";
import {profileReducer} from "../profile-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;