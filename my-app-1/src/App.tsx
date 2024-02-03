import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { allowedNodeEnvironmentFlags } from "process";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating";
import AppTitle from "./components/AppTitle";
import { isPropertySignature } from "typescript";
import styled from "styled-components";

// function declaration
function App() {
  // Полезное что-то

  // обязана вернуть JSX
  // return (
  //   <div>
  //     {/* <input value={'ender name'}/>
  //     <input type={'date'}/> */}
  //     {/* каждая функция обязана быть написана с большой буквы */}
  //     <AppTitle/>
  //     <Accordion titleValue={""} collapsed={false}/>
  //     <Rating value={3}/>
  //     <Accordion titleValue={" "} collapsed={false}/>
  //     <Rating value={5}/>
  //     <Accordion titleValue={"Menu"} collapsed={true}/>
  //     <Accordion titleValue={"Users"} collapsed={false}/>
  //     <Rating value={5}/>
  //     <Rating value={0}/>
  //   </div>
  // );

  // наши стили с разметкой
  return (
    <div className="App">
      <Menu>
        <ul>
          <li><a href="#">menu item 1</a></li>
          <li><a href="#">menu item 2</a></li>
          <li><a href="#">menu item 3</a></li>
        </ul>
      </Menu>

      <Box>
        <StyledBtn as={Link} href={"#"}>
          LinkComponent
        </StyledBtn>
        <StyledBtn as="a" href={"#"}>
          Link
        </StyledBtn>
        <StyledBtn>Button</StyledBtn>
        <SuperButton>Super Button</SuperButton>
      </Box>
    </div>
  );
}

export default App;

const StyledBtn = styled.button`
  border: none;
  background-color: #fb3f78;
  padding: 10px 20px;
  color: snow;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    background-color: blue;
  }

  &:last-child {
    background-color: lightgreen;
  }
`;

const Link = styled.a`
  color: #4983c3;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  padding: 0;
`;

const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #ffe869;
  color: black;
`;

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }
`;

const Menu = styled.nav``;
