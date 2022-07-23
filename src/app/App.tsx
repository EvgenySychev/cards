import React from 'react';
import './App.css';
import {Pages} from "../components/Pages";
import {Header} from "../components/Header";

export const PATH = {
    TEST: '/cards'
}

function App() {

    return (
        <div>
            <Header/>
            <Pages/>
        </div>
    );
}

export default App;
