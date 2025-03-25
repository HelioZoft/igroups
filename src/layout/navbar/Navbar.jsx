import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="header-style1 menu_area-light">
        <div className="navbar-default border-bottom border-color-light-white">
            <div className="top-search bg-secondary">
                <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
                    <form className="search-form" >
                        <div className="input-group">
                            <span className="input-group-addon cursor-pointer">
                                <button className="search-form_submit fas fa-search text-white" type="submit"></button>
                            </span>
                            <input 
                               type="text" 
                               className="search-form_input form-control" 
                               name="s" 
                               autoComplete="off" 
                               placeholder="Type & hit enter..."
                            />
                            <span className="input-group-addon close-search mt-1"><i className="fas fa-times"></i></span>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-12">
                        <div className="menu_area alt-font">
                            <nav className="navbar navbar-expand-lg navbar-light p-0">
                                <div className="navbar-header navbar-header-custom">
                                   
                                    <a href="#!" className="navbar-brand">
                                        <img id="logo" src="assets/img/logos/logo-inner.png" alt="logo" /></a>
                                </div>

                                <div className="navbar-toggler"></div>

                                {/* start menu area */}
                                <ul className="navbar-nav ms-auto" id="nav" style={{ display: "none" }}>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/events">Event</Link>
                                    </li>
                                    <li>
                                        <a href="#!">Career</a>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                                 {/* end menu area  */}

                                 {/* start attribute navigation */}
                                <div className="attr-nav align-items-xl-center ms-xl-auto main-font">
                                    <ul>
                                        <li className="search"><a href="#!"><i className="fas fa-search"></i></a></li>
                                        <li className="d-none d-xl-inline-block"><a href="contact.html" className="btn-style1 primary md text-white">Free Quote</a></li>
                                    </ul>
                                </div>
                               {/* end attribute navigation */}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar
