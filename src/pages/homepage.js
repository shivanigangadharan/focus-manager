import React from 'react';
import TheTimer from '../components/theTimer';
import { useTimerDuration } from '../context/timerContext';

export default function Homepage() {
    const { userTimer, setUserTimer } = useTimerDuration();
    return (
        <div>
            <h1> Homepage </h1>
            <TheTimer />
            <button onClick={() => setUserTimer(15)}> Set time to 15 sec </button>
        </div>
    )
}