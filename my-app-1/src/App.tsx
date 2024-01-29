import React from 'react';
import logo from './logo.svg';
import './App.css';
import { allowedNodeEnvironmentFlags } from 'process';


// function declaration
function App() {
  // Полезное что-то
 
  // обязана вернуть JSX
  return (
    <div>
      This is App component
      {/* каждая функция обязана быть написана с большой буквы */}
      <Rating/>
      <Accordion/>
      <Star/>
    </div>
  );
}

function Star() {
  return (
    <div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
      <div>star</div>
    </div>
  )
}

function Rating() {
  return (
    <div>
      <div>start</div>
      <div>start</div>
      <div>start</div>
      <div>start</div>
      <div>start</div>
    </div>
  )
}

function Accordion() {
  return <div>
    <h3>Menu</h3>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
}

export default App;
