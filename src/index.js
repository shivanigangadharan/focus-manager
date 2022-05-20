import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { TimerDurationProvider } from './context/timerContext';
import { TaskListProvider } from './context/taskContext';

ReactDOM.render(
    <React.StrictMode>
        <TimerDurationProvider>
            <TaskListProvider>
                <App />
            </TaskListProvider>
        </TimerDurationProvider>
    </React.StrictMode>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
