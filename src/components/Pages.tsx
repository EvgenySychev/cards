import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import {NewPassword} from "./NewPassword";
import Error404 from "./Error404";
import {Test} from "./Test";
import {SingUp} from "./SingUp";
import {Login} from "./Login";
import {PasswordRecovery} from "./PasswordRecovery";
import {Profile} from "./Profile";


export const PATH = {
    TEST: '/cards',
    LOGIN: '/cards/login',
    SING_UP: '/cards/singUp',
    PROFILE: '/cards/profile',
    PASSWORD_RECOVERY: '/cards/passwordRecovery',
    NEW_PASSWORD: '/cards/newPassword',
}

export const Pages = () => {


return (
    <div>

        <Routes>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.SING_UP} element={<SingUp/>}/>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
            <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
            <Route path={'/'} element={<Navigate to={PATH.TEST}/>}/>
            <Route path={'*'} element={<Error404/>} />
            <Route path={PATH.TEST} element={<Test/>} />
        </Routes>
    </div>
);
}