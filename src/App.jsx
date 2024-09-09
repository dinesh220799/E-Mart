import React from 'react';
import './App.css';
import LandingPage from './stores/pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import MobilePage from './stores/pages/MobilePage';
import AcPage from './stores/pages/AcPage';
import CompPage from './stores/pages/CompPage';
import FridgePage from './stores/pages/FridgePage';
import WatchPage from './stores/pages/WatchPage';
import FurniturePage from './stores/pages/FurniturePage';
import KitchenPage from './stores/pages/KitchenPage';
import MenPage from './stores/pages/MenPage';
import WomanPage from './stores/pages/WomanPage';
import SpeakersPage from './stores/pages/SpeakersPage';
import TVPage from './stores/pages/TVPage';
import MobileSingle from './singles/MobileSingle.jsx';
import UserCart from './stores/UserCart';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/mobiles' element={<MobilePage />} />
        <Route path='/ac' element={<AcPage />} />
        <Route path='/computers' element={<CompPage />} />
        <Route path='/fridges' element={<FridgePage />} />
        <Route path='/watches' element={<WatchPage />} />
        <Route path='/furniture' element={<FurniturePage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/woman' element={<WomanPage />} />
        <Route path='/speakers' element={<SpeakersPage />} />
        <Route path='/tv' element={<TVPage />} />
        <Route path='/mobiles/:id' element={<MobileSingle />} />
        <Route path='/cart' element={<UserCart />} />
      </Routes>
    </div>
  );
};

export default App;
