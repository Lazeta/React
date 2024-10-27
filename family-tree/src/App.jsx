import React from 'react';
import './App.css';
import { familyTreeData } from './Data';
import Family from './Family';

function App() {
  return (
    <div className="App">
      <Family familyTreeData={familyTreeData} />
    </div>
  );
}

export default App;
