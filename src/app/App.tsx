import React, {useEffect} from 'react';
import './App.css';
import {Pages} from "../components/Pages";
import {Header} from "../components/Header";
import {useAppDispatch, useAppSelector} from "../hooks/useTypeHooks";
import {initializeAppTC} from "../features/auth-reducer";


function App() {

    const isInitialized = useAppSelector(state => state.app.isInitialized);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initializeAppTC());
    }, []);

    if(!isInitialized) {
        window.alert("крутилка")
    }
    return (
        <div>
            <Header/>
            <Pages/>
        </div>
    );
}

export default App;
