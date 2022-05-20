import React from 'react';
import './header.css';
import whiteLogo from '../../assets/whiteLogo.png';

export default function Header() {
    return (
        <div className="header-container">
            <img className="white-logo" alt="white logo" src={whiteLogo} />
            <h1 className="header-title">Focus Manager</h1>
        </div>
    )
}