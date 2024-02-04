import React from "react";
import "./App.css";
import styled from "styled-components";
import { BtnSave } from "./components/styles/Buttons/BtnSave.styled";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./components/styles/MyTheme.styled";
import { BoxCard } from "./components/styles/BoxCard.styled";
import { BtnSeeMore } from "./components/styles/Buttons/BtnSeeMore.styled";
import { Button } from "./components/styles/Buttons/Button.styled";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.theme};
`;

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <StyledDiv className="App">
        <BoxCard>
          <Button>
            <BtnSave />
            <BtnSeeMore />
          </Button>
        </BoxCard>
      </StyledDiv>
    </ThemeProvider>
  );
}

export default App;
