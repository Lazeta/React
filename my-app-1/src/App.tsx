import React from "react";
import "./App.css";
import { allowedNodeEnvironmentFlags } from "process";
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating";
import AppTitle from "./components/AppTitle";
import { isPropertySignature } from "typescript";
import styled from "styled-components";
// import { StyledBtn, SuperButton } from "./components/Button.styled";
import { Link } from "./components/Link.styled";
import { Menu } from "./components/Menu.styled";
import { StyledBtn } from "./components/Button.styled";

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
  // return (
  //   <div className="App">
  //     <Menu>
  //       <ul>
  //         <li><a href="#">menu item 1</a></li>
  //         <li><a href="#">menu item 2</a></li>
  //         <li><a href="#">menu item 3</a></li>
  //       </ul>
  //     </Menu>

  //     <Box>
  //       <StyledBtn as={Link} href={"#"}>
  //         LinkComponent
  //       </StyledBtn>
  //       <StyledBtn as="a" href={"#"}>
  //         Link
  //       </StyledBtn>
  //       <StyledBtn>Button</StyledBtn>
  //       <SuperButton>Super Button</SuperButton>
  //     </Box>
  //   </div>
  // );

  // поработаем с props
  return (
    <div className="App">
      <Box>
        {/* <StyledBtn color={"green"} fontSize={"20px"}>Hello</StyledBtn>
        <StyledBtn color={"red"}>Hello</StyledBtn>
        <StyledBtn fontSize={"30px"}>Hello</StyledBtn> */}

        <StyledBtn btnType={"primary"} active>Hello</StyledBtn>
        <StyledBtn btnType={"outlined"}>Hello</StyledBtn>
      </Box>
    </div>
  )
}

export default App;

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

  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`