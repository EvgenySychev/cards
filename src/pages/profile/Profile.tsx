import React, {ChangeEvent, useEffect, useState} from 'react'
import SuperButton from "../../common/SuperButton/SuperButton";
import s from '../../pages/profile/Profile.module.css'
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../app/store";


export const Profile = () => {

    const dispatch = useAppDispatch()

    const userName = useSelector<any, any>(state => state.profile.name)
    const userEmail = useSelector<any, any>(state => state.profile.email)
    const userPublicCardPacksCount = useSelector<any, any>(state => state.profile.publicCardPacksCount)
    const isLoggedIn = useSelector<any, any>(state => state.auth.isLoggedIn)

    let [value, setValue] = useState(userName);//забрать с BLL value
    let [imgURL, setImgURL] = useState('https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png');//забрать с BLL

    //const updateProfile = dispatch(updateNameProfileTC({value, imgURL}))

    useEffect(() => {
        if (!isLoggedIn) {
            return
        }
        //dispatch(profileTC)

    })

    const logOutHandler = () => {

        //dispatch(authTC)
        //dispatch(logOutProfileTC)
        alert("logOut success")

    }

    const UpdateUserName = (title: string) => {
        setValue(title)
        //dispatch(updateNameProfileTC({title}))
    }

    return (
        <div className={s.profile}>
            <div>Personal Information</div>
            <div>
                <img className={s.img} src={imgURL}/>
            </div>
            <div>Name: <EditableSpan value={value} onChange={(t) => {
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