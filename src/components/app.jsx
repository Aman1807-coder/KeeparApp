import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Signin from './signin';
import Home from './home';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;