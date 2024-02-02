import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { allowedNodeEnvironmentFlags } from "process";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating";
import AppTitle from "./components/AppTitle";
import { isPropertySignature } from "typescript";

// function declaration
function App() {
  // Полезное что-то

  // обязана вернуть JSX
  return (
    <div>
      {/* <input value={'ender name'}/>
      <input type={'date'}/> */}
      {/* каждая функция обязана быть написана с большой буквы */}
      <AppTitle/>
      <Accordion titleValue={""} collapsed={false}/>
      <Rating value={3}/>
      <Accordion titleValue={" "} collapsed={false}/>
      <Rating value={5}/>
      <Accordion titleValue={"Menu"} collapsed={true}/>
      <Accordion titleValue={"Users"} collapsed={false}/>
      <Rating value={5}/>
      <Rating value={0}/>
    </div>
  );
}

export default App;
