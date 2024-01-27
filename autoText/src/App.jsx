// App.jsx
import { useState } from 'react';
import './App.css';
import Resources from "./resources/countryData.json";
import AutoComplete from './components/AutoComplete';

function App() {
  console.log(Resources);
  return (
    <div className='App'>
      <h1>Autocomplete App</h1>
      <AutoComplete suggestions={Resources} />
    </div>
  );
}

export default App;
