import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { StatesTable } from './components/States';
import { CONTINENTS } from './utilities';

function App() {
  return (
    <>
      <Navigation continents={CONTINENTS} />
      <StatesTable />
    </>
  );
}

export default App;
