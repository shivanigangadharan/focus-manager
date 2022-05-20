import React, { useState } from 'react';
import TheTimer from '../../components/Timer/theTimer';
import './settings.css';
import Sidebar from '../../components/Sidebar/sidebar';
import Header from '../../components/Header/header';
import Tasks from '../../components/Tasks/tasks';
import { useTimerDuration } from '../../context/timerContext';

export default function TimerPage() {
    const [pomoTimer, setPomoTimer] = useState();
    const [shortBreak, setShortBreak] = useState();
    const [longBreak, setLongBreak] = useState();
    const { setUserTimer, setUserShortBreak, setUserLongBreak } = useTimerDuration();

    return (
        <div>
            <Header />
            <div className="timer-page-container">
                <Sidebar />
                <div className="settings-content">
                    <h2 className="settings-title"> Change settings for timer and breaks duration </h2>
                    <div>
                        <div className="settings-input-div">
                            <label className="ip-label"> Enter time for Pomodoro Timer (in mins): </label>
                            <input onChange={(e) => { setPomoTimer(e.target.value) }} className="time-input" type="number" />
                            <button onClick={() => { setUserTimer(pomoTimer * 60) }} className="save-btn"> Save </button>
                        </div>
                        <div className="settings-input-div">
                            <label className="ip-label"> Enter time for Short Break (in mins): </label>
                            <input onChange={(e) => { setShortBreak(e.target.value) }} className="time-input" type="number" />
                            <button onClick={() => { setUserShortBreak(shortBreak * 60) }} className="save-btn"> Save </button>
                        </div>
                        <div className="settings-input-div">
                            <label className="ip-label"> Enter time for Long Break (in mins): </label>
                            <input onChange={(e) => { setLongBreak(e.target.value) }} className="time-input" type="number" />
                            <button onClick={() => { setUserLongBreak(longBreak * 60) }} className="save-btn"> Save </button>
                        </div>
                    </div>
                </div>
                <TheTimer />
            </div>
        </div>
    )
}