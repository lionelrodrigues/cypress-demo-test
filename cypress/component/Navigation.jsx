import { Route, Routes } from "react-router-dom";

import React from 'react'
import Home from "../../src/pages/Home";
import Login from "../../src/pages/Login";
import Signup from "../../src/pages/Signup";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}

export default Navigation