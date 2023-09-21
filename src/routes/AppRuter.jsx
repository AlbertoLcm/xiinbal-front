import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Planes } from "../pages/Planes";

export default function AppRouter() {
    return (
        <div className='App' >
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='planes' element={<Planes />} />
            </Routes>
        </div>
    )
}