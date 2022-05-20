import React, { useState, createContext, useContext } from 'react';

export const TimerDuration = createContext();

export const useTimerDuration = () => useContext(TimerDuration);

export const TimerDurationProvider = ({ children }) => {
    const [userTimer, setUserTimer] = useState(1500);
    const [userShortBreak, setUserShortBreak] = useState(300);
    const [userLongBreak, setUserLongBreak] = useState(600);

    return (
        <TimerDuration.Provider value={{ userTimer, setUserTimer, userShortBreak, setUserShortBreak, userLongBreak, setUserLongBreak }}>
            {children}
        </TimerDuration.Provider>
    )
}