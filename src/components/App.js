import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DragonPage from './Dragon/DragonPage';
import MissionPage from './Mission/MissionPage';
import RocketsPage from './Rockets/RocketsPage';
import ProfilePage from './profile/ProfilePage';
import Navigation from './Navigation/Navigation';

import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<ProfilePage />} />

        <Route path="/" element={<RocketsPage />} />

        <Route path="/dragons" element={<DragonPage />} />

        <Route path="/missions" element={<MissionPage />} />

        <Route path="/rockets" element={<RocketsPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
