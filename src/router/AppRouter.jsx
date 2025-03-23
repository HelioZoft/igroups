import React from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Applayout from '../layout/Applayout';
import Home from '../pages/Home';

const AppRouter = () => {
  return (
    <BrowserRouter>
     <Routes>

        <Route element={<Applayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

     </Routes>
    </BrowserRouter>
  )
}

export default AppRouter