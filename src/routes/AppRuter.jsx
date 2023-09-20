import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MainView from "../pages/main/Main";

export default function AppRouter() {
    return (
        <div className='App' >
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='planes' element={<MainView />} />
            </Routes>
        </div>
    )
}