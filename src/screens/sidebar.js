import React from 'react'
import logo from '../ui/logo.svg';
import '../App.css';
function Sidebar() {
    return (
        <div className="sidebar_fixed">
            <a href="#" className="logo bl">
                <img src ={logo} className="bl" alt="logo" />
            </a>
        </div>
    )
}

export default Sidebar;
