import React from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { Route, Routes } from "react-router-dom"

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
        </Routes>
    )
}

export default Navigation;
