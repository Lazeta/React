import React from 'react';
import logo from './logo.svg';
import './App.css';
import { allowedNodeEnvironmentFlags } from 'process';
import { Accordion } from "./components/Accordion/Accordion.tsx"

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
        <Accordion/>
        <AppTitle/>
    </div>
  );
}

function AppTitle() {
    return (
        <>
        "This is APP component"
        </>
    )
}

function Star() {
    console.log("Star rendered")
    return <div>star</div>
}

function Rating() {
  return (
    <>
      <div>start</div>
      <div>start</div>
      <div>start</div>
      <div>start</div>
      <div>start</div>
    </>
  )
}

export default App;
