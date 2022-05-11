import React from 'react';
import './homepage.css';
import timerImage from '../../assets/timerImage.png';
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div className="homepage-container">
            <div>
                <h1 className="pomo-title"> Focus Manager.</h1>
                <div className="sub-section">
                    Using the pomodoro technique has proven to increase productivity and get the same amount of work done in lesser time.
                    Use this app to manage your focus and get more things done, today!
                </div>
                <center>
                    <Link to="/timerpage">
                        <button className="btn get-started"> GET STARTED </button>
                    </Link>
                </center>
            </div>
            <img className="timer-image" src={timerImage} />

        </div>
    )
}