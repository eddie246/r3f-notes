import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home.jsx';
import Intro from './lessons/1-intro/0-Intro.jsx';
import Drei from './lessons/2-drei/Drei.jsx';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Navigate to='/' />} />
      <Route path='/' replace element={<Home />} />
      <Route path='/intro/*' element={<Intro />} />
      <Route path='/drei/*' element={<Drei />} />
    </Routes>
  );
}

export default App;
