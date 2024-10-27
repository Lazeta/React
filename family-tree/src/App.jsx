import React from 'react';
import './App.css';
import { data } from './Data';
import Family from './Family';
import Tree from './Tree';

function App() {
  return (
    <div className="App">
      {/* <Family familyTreeData={familyTreeData} /> */}
      <Tree data={data}/>
    </div>
  );
}

export default App;