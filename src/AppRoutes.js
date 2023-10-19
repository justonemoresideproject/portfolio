import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Projects/Projects';
import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';

function AppRoutes() {
    return (
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/Projects'
                    element={<Projects />}
                />
                <Route
                    path='/Resume'
                    element={<Resume />}
                />
                <Route
                    path='/Contact'
                    element={<Contact />}
                />
            </Routes>
        )
}

export default AppRoutes