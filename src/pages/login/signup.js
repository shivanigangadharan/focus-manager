import React, { useState } from 'react';
import './login.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export default function Signup() {
    const navigate = useNavigate();
    const [pswdType, setPswdType] = useState("password");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [checkTerms, setCheckTerms] = useState(false);
    const { SignupUser } = useAuth();
    const toggleCheck = (e) => {
        setCheckTerms(e.target.checked);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === undefined || password === undefined) {
            alert("Please enter email and password.");
        }
        else {
            if (checkTerms) {
                if (SignupUser(name, email, password) !== null) {
                    navigate("/timerpage");
                }
            } else {
                alert("Please accept terms and conditions.");
            }
        }
    }
    return (
        <div>

            <div className="page-container">

                <div className="container-login">
                    <h2 className="heading">Sign up</h2>
                    <form>
                        <div className="input-container">
                            <br />
                            <input required onChange={e => setName(e.target.value)} className="text-input" type="text" placeholder="Enter your full name" />
                        </div>
                        <div className="input-container">
                            <br />
                            <input required onChange={e => setEmail(e.target.value)} className="text-input" type="email" placeholder="Enter email : adarshbalika@gmail.com" />
                        </div>
                        <div className="input-container">
                            <br />
                            <div>
                                <input required onChange={e => setPassword(e.target.value)} className="text-input" type={pswdType} placeholder="Enter password : ***********" />

                                <div onClick={() => { pswdType === "password" ? setPswdType("text") : setPswdType("password") }} className="show-pswd"> {pswdType === "password" ? "Show password" : "Hide password"} </div>
                            </div>
                        </div>
                        <div className="accept">
                            <input type="checkbox" required onClick={e => toggleCheck(e)} /> I accept all terms and conditions
                        </div>
                        <center>
                            <button type="submit" onClick={(e) => { handleSubmit(e) }} className="btn login">Create new account</button>
                            <div className="create">
                                <Link to="/login">
                                    Already have an account
                                <i className="fa-solid fa-chevron-right"></i>
                                </Link>
                            </div>
                        </center>
                    </form>
                </div>

            </div>

        </div >
    )
}