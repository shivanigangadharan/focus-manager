import React, { useState, useEffect } from 'react';
import './header.css';
import whiteLogo from '../../assets/whiteLogo.png';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router';

export default function Header() {
    const { user, setUser, loggedUserID, setLoggedUserID } = useAuth();
    const [name, setName] = useState(null);
    const [loggedin, setLoggedin] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedUserID) {
            setLoggedin(true);
            setName(user.name);
        } else {
            setName(null);
            setLoggedin(false);
        }
    }, [loggedUserID]);

    const handleLoginClick = () => {
        if (loggedin) {
            setLoggedUserID(null);
            setUser(null);
            localStorage.removeItem("user");
            navigate("/");
        }
        else {
            navigate("/login");
        }
    }

    return (
        <div className="header-container">
            <div className="brand">
                <img className="white-logo" alt="white logo" src={whiteLogo} />
                <h1 className="header-title">Focus Manager</h1>
            </div>
            <div className="header-elements">
                {name ? <div>Welcome, {name}</div> : <div></div>}
                <div onClick={handleLoginClick}>
                    {
                        loggedin ? <div>
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>  Logout
                </div> : <div>
                                <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
                </div>
                    }
                </div>
            </div>
        </div>
    )
}


