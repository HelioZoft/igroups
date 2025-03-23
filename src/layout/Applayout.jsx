import React from 'react'
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import {Outlet} from 'react-router-dom';

const Applayout = () => {
  return (
    <div className="main-wrapper">
     <Navbar />
        <Outlet />
     <Footer />
    </div>
  )
}

export default Applayout;