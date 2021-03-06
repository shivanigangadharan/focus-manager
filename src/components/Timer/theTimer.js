import React, { useState, useEffect } from 'react';
import { useTimerDuration } from '../../context/timerContext';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './theTimer.css';
import playpause from '../../assets/playpause.wav';
import stop from '../../assets/stop.wav';
import happyBells from '../../assets/happyBells.wav';

export default function TheTimer() {

    const { userTimer, setUserTimer, userShortBreak, userLongBreak } = useTimerDuration();

    const [currentindex, setCurrentIndex] = useState(0);
    const [timer, setTimer] = useState(userTimer);
    const [running, setRunning] = useState(false);
    const [type, setType] = useState("pomodoro");
    const [minutes, setMinutes] = useState(parseInt(timer / 60));
    const [seconds, setSeconds] = useState(timer % 60);
    const playPause = new Audio(playpause);
    const Stop = new Audio(stop);
    const endingSound = new Audio(happyBells);

    useEffect(() => {
        if (type === "pomodoro") {
            setTimer(userTimer);
        } else if (type === "shortbreak") {
            setTimer(userShortBreak);
        } else {
            setTimer(userLongBreak);
        }
    }, [userTimer, type, userShortBreak, userLongBreak]);

    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        return <div className="remaining-time"> {minutes}:{seconds}</div>
    }

    const toggleClick = () => {
        setRunning(!running);
        playPause.play();
    }

    return (
        <div className="timer-container">
            <div className="timer-section">
                <div>
                    <button className={type === "pomodoro" ? "btn-type selected-type" : "btn-type"} onClick={() => { setType("pomodoro") }}> Pomodoro </button>
                    <button className={type === "shortbreak" ? "btn-type selected-type" : "btn-type"} onClick={() => { setType("shortbreak"); setCurrentIndex(currentindex + 1); setRunning(false); }}> Short break </button>
                    <button className={type === "longbreak" ? "btn-type selected-type" : "btn-type"} onClick={() => { setType("longbreak"); setCurrentIndex(currentindex + 1); setRunning(false); }}> Long break </button>
                </div>
                <CountdownCircleTimer
                    class="circle-timer"
                    key={currentindex}
                    isPlaying={running}
                    duration={timer}
                    colors={['#2dad26', '#dbca0d', '#db710d', '#a3130b']}
                    colorsTime={[8, 5, 4, 0]}
                    strokeLinecap="round"
                    onComplete={() => {
                        setCurrentIndex(currentindex + 1);
                        setRunning(false);
                        endingSound.play();
                    }
                    }
                >
                    {children}
                </CountdownCircleTimer>
                <div className="btn-div">
                    {
                        running ? <span className="icon pause"> <i onClick={toggleClick} className="fa-solid fa-pause"></i></span>
                            : <span className="icon"> <i onClick={toggleClick} className="fa-solid fa-play"></i> </span>
                    }

                    <span className="icon stop" onClick={() => { setCurrentIndex(currentindex + 1); setRunning(false); Stop.play() }}><i className="fa-solid fa-square"></i></span>
                </div>
            </div>
        </div >
    )
}