import React from 'react'
//import {registerTC} from "../features/profile-reducer";
import {useAppDispatch} from "../hooks/useTypeHooks";

export const SingUp = () => {

    const dispatch = useAppDispatch()

    const registerHandler = () => {
        console.log('register')
       // dispatch(registerTC)
    }


    return (
        <div>
           <button onClick={()=>registerHandler()}>SING UP PAGE</button> SING UP PAGE
        </div>
    )
}