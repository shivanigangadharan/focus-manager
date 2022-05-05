import React, { useState, useEffect } from 'react';
import { useTimerDuration } from '../context/timerContext';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'



export default function TheTimer() {

    const { userTimer, setUserTimer } = useTimerDuration();

    const [currentindex, setCurrentIndex] = useState(0);
    const [timer, setTimer] = useState(userTimer);
    const [btnText, setBtnText] = useState("START")
    const [remainingTime, setRemainingTime] = useState(userTimer);
    const [running, setRunning] = useState(false);
    const [intervalID, setIntervalID] = useState();

    useEffect(() => {
        setTimer(userTimer);
    }, [userTimer])

    return (
        <div>
            <CountdownCircleTimer
                key={currentindex}
                isPlaying={running}
                duration={timer}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                strokeLinecap="square"
                onComplete={() => {
                    setCurrentIndex(currentindex + 1);
                    setRunning(false);
                }
                }
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>

            <button onClick={() => { setRunning((running) => !running) }}> {running ? "PAUSE" : "START"} </button>
            <button onClick={() => { setCurrentIndex(currentindex + 1) }}> STOP </button>

        </div >
    )
}