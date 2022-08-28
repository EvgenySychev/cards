import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import {NewPassword} from "./NewPassword";
import Error404 from "./Error404";
import {SingUp} from "./SingUp";
import {Login} from "../pages/login/Login";
import {PasswordRecovery} from "./PasswordRecovery";
import {Profile} from "../pages/profile/Profile";

export const PATH = {
    //TEST: '/cards',
    LOGIN: '/login',
    SING_UP: '/singUp',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/passwordRecovery',
    NEW_PASSWORD: '/newPassword',
}

export const Pages = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate replace to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.SING_UP} element={<SingUp/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                {/*<Route path={PATH.TEST} element={<Test/>}/>*/}
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
}