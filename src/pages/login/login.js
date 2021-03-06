import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { LoginUser } = useAuth();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        if (email === undefined || password === undefined) {
            alert("Please enter email and password.");
        }
        else {
            const LoginResponse = await LoginUser(email, password);
            if (LoginResponse) {
                navigate("/timerpage");
            } else {
                alert("Invalid credentials, please sign up.");
            }
        }
    }
    const guestLogin = async (e) => {
        e.preventDefault();
        try {
            const LoginResponse = await LoginUser("guest@gmail.com", "guest123");
            if (LoginResponse) {
                navigate("/timerpage");
            } else {
                alert("Invalid credentials, please sign up.");
            }
        } catch (e) { console.log(e) }
    }
    return (
        <div>
            <div className="page-container">

                <div className="container-login">
                    <h2 className="heading">Login</h2>
                    <form>
                        <center>
                            <div>
                                <br />
                                <input onChange={e => setEmail(e.target.value)} className="text-input" type="email" placeholder="Enter email : adarshbalika@gmail.com" />
                            </div>
                            <div>
                                <br />
                                <input onChange={e => setPassword(e.target.value)} className="text-input" type="password" placeholder="Enter password : ***********" />
                            </div>
                            <button onClick={e => handleLogin(e)} className="btn login">Login</button><br />
                            <button onClick={e => guestLogin(e)} className="btn login">Login as a guest</button>

                            <div className="create">
                                <Link to="/signup">
                                    Create new account
                                <i className="fa-solid fa-chevron-right" />
                                </Link>
                            </div>
                        </center>
                    </form>
                </div>

            </div>


        </div>
    )
}