import React, {ChangeEvent, useState} from 'react'
import SuperButton from "../../common/SuperButton/SuperButton";
import s from '../../pages/profile/Profile.module.css'
import {useAppDispatch} from "../../hooks/useTypeHooks";
import {useAppSelector} from "../../hooks/useTypeHooks";
import {Navigate} from "react-router-dom";
import {PATH} from "../../components/Pages";

export const Profile = () => {

    const dispatch = useAppDispatch()

    const userName = useAppSelector(state => state.login.name)
    const userEmail = useAppSelector(state => state.login.email)
    const userImg = useAppSelector(state => state.login.avatar)
    const userPublicCardPacksCount = useAppSelector(state => state.login.publicCardPacksCount)
    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)

    const logOutHandler = () => {

        //dispatch(authTC)
        //dispatch(logOutProfileTC)
        alert("logOut success")

    }

    const UpdateUserName = (title: string) => {
        alert(title)
        //  setValue(title)
        //dispatch(updateNameProfileTC({title}))
    }

    if (!isLoggedIn) {
        return <Navigate replace to={PATH.LOGIN}/>
    }

    return (
        <div className={s.profile}>
            <div>Personal Information</div>
            <div>
                <img className={s.img} src={userImg}/>
            </div>
            <div>Name: <EditableSpan value={userName} onChange={(t) => {
                UpdateUserName(t)
            }}/>✎
            </div>
            <div>Email:{`${userEmail}`}</div>
            <div>Количество созданных колод:{`${userPublicCardPacksCount}`}</div>
            <SuperButton onClick={logOutHandler}>LOGOUT</SuperButton>
        </div>
    )
}

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <input value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{props.value}</span>
});