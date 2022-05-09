import React from 'react';
import './App.css';
import Homepage from './pages/homepage';
import TimerPage from './pages/timerPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="timerpage" element={<TimerPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
