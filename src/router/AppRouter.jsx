import React from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Applayout from '../layout/Applayout';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Events from '../pages/Events';

const AppRouter = () => {
  return (
    <BrowserRouter>
     <Routes>

        <Route element={<Applayout />}> 
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/events' element={<Events />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
     </Routes>
    </BrowserRouter>
  )
}

export default AppRouter