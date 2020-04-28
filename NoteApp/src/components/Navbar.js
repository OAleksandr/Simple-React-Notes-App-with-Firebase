import React from 'react';
import {NavLink} from 'react-router-dom';

let time = new Date().toDateString();

const Navbar = () => (

   <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
       <div className="navbar-brand">
            <NavLink 
                className="nav-brand" 
                to="/"
                exact>APPNOTE 
            </NavLink>
       </div>

       <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/"
                    exact>Notes 
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/about">About 
                </NavLink>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto nav-flex-icons nav-icons">
            <span className="badge badge-light">{time}</span>
        </ul>
        
        
   </nav>
)// <--END OF JSX

export default Navbar;