import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <Link to="/">
                <div className="sidebar-item"> <i className="fa-solid fa-house"></i> Home </div>
            </Link>
            <Link to="/timerpage">
                <div className="sidebar-item"><i className="fa-solid fa-hourglass"></i> Timer </div>
            </Link>
            <Link to="/settings">
                <div className="sidebar-item"> <i className="fa-solid fa-gear"></i> Settings </div>
            </Link>
            <Link to="/knowmore">
                <div className="sidebar-item"><i className="fa-solid fa-circle-info"></i> Know More </div>
            </Link>
        </div>
    )
}