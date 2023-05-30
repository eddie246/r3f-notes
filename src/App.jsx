import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home.jsx';
import Intro from './lessons/1-intro/Intro.jsx';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Navigate to='/' />} />
      <Route path='/' replace element={<Home />} />
      <Route path='/intro/*' element={<Intro />} />
      <Route path='/drei' element={<div>DREI</div>} />
    </Routes>
  );
}

export default App;
