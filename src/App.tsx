import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { StatesTable } from './components/States';
import { CONTINENTS } from './utilities';
import { statePlaceholderData } from './utilities/states';

function App() {
  return (
    <>
      <Navigation continents={CONTINENTS} />
      {/* <StatesTable data={statePlaceholderData} /> */}
      <StatesTable />
    </>
  );
}

export default App;
