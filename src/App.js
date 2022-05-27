import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import TimerPage from './pages/timerPage/timerPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './pages/Settings/settings-page';
import KnowMore from './pages/KnowMore/knowmore';
import Login from './pages/login/login';
import Signup from './pages/login/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="timerpage" element={<TimerPage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="knowmore" element={<KnowMore />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
