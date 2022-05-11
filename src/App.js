import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import TimerPage from './pages/timerPage/timerPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/timerpage" element={<TimerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
