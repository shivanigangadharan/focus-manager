import React, { useState, createContext, useContext } from 'react';

export const TimerDuration = createContext();

export const useTimerDuration = () => useContext(TimerDuration);

export const TimerDurationProvider = ({ children }) => {
    const [userTimer, setUserTimer] = useState(1500);
    return (
        <TimerDuration.Provider value={{ userTimer, setUserTimer }}>
            {children}
        </TimerDuration.Provider>
    )
}