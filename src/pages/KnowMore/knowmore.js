import React from 'react';
import Header from '../../components/Header/header';
import Sidebar from '../../components/Sidebar/sidebar';
import './knowmore.css';

export default function KnowMore() {
    return (
        <div>
            <Header />
            <div className="timer-page-container">
                <Sidebar />
                <div className="knowMore-content">
                    <h2> What is Pomodoro? </h2>
                    <p> The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.</p>
                    <h2> How to use this app? </h2>
                    The original technique has six steps:
                    <ol>
                        <li>Decide on the task to be done.</li>
                        <li>Set the pomodoro timer (typically for 25 minutes).</li>
                        <li>Work on the task.</li>
                        <li>End work when the timer rings and take a short break (typically 5–10 minutes).</li>
                        <li>If you have finished fewer than three pomodoros, go back to Step 2 and repeat until you go through all three pomodoros.</li>
                        <li>After three pomodoros are done, take the fourth pomodoro and then take a long break (typically 20 to 30 minutes). Once the long break is finished, return to step 2.</li>
                    </ol>
                    <p>Cirillo suggests:</p>

                    <p>Specific cases should be handled with common sense: If you finish a task while the Pomodoro is still ticking, the following rule applies: If a Pomodoro begins, it has to ring. It’s a good idea to take advantage of the opportunity for overlearning, using the remaining portion of the Pomodoro to review or repeat what you’ve done, make small improvements, and note what you’ve learned until the Pomodoro rings.</p>

                </div>
            </div>
        </div>
    )
}