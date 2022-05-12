import React from 'react';
import TheTimer from '../../components/Timer/theTimer';
import './timerPage.css';
import Sidebar from '../../components/Sidebar/sidebar';
import Header from '../../components/Header/header';
import Tasks from '../../components/Tasks/tasks';

export default function TimerPage() {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="timer-page-container">
                <TheTimer />
                <Tasks />
            </div>
        </div>
    )
}