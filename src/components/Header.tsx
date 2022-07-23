import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

export const Header= () => {
    return (
        <div className={s.header}>
            <NavLink to={PATH.LOGIN} >login</NavLink>
            <NavLink to={PATH.SING_UP} >sing up</NavLink>
            <NavLink to={PATH.PROFILE} >profile</NavLink>
            <NavLink to={PATH.PASSWORD_RECOVERY} >password recovery</NavLink>
            <NavLink to={PATH.NEW_PASSWORD} >new password</NavLink>
            <NavLink to={PATH.TEST} >test</NavLink>
            <div/>
        </div>
    )
}
