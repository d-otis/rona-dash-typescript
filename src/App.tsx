import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { CONTINENTS } from './utilities/continents';

function App() {
  return <Navigation continents={CONTINENTS} />;
}

export default App;
