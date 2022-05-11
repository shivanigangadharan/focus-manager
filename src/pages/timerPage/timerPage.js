import React from 'react';
import TheTimer from '../../components/theTimer';
import './timerPage.css';

export default function TimerPage() {
    return (
        <div className="timer-page-container">
            <TheTimer />
            {/* Tasks component */}
        </div>
    )
}