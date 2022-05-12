import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import TimerPage from './pages/timerPage/timerPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings/settings';
import KnowMore from './pages/KnowMore/knowmore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/timerpage" element={<TimerPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/knowmore" element={<KnowMore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
