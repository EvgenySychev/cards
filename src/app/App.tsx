import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import {Test} from "../Test";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/login'}/>
        <Route path={'//singUp'}/>
        <Route path={'/profile'}/>
        <Route path={'/404'}/>
        <Route path={'/passwordRecovery'}/>
        <Route path={'/newPassword'}/>
        <Route path={'/'} element={<Test/>}/>
      </Routes>
    </div>
  );
}

export default App;
