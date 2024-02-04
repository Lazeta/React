import React from "react";
import "./App.css";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./components/styles/MyTheme.styled";
import { BoxCard } from "./components/styles/BoxCard.styled";
import { Button } from "./components/styles/Buttons/Button.styled";
import { CoverCard } from "./components/styles/CoverCard.styled";
import { TitleCard } from "./components/styles/TitleCard.styled";
import { DescriptionCard } from "./components/styles/DescriptionCard.styled";
import { Buttons } from "./components/styles/Buttons/Buttons.styled";
import { WrapperCard } from "./components/styles/WrapperCard.styled";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.theme};
`;

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <StyledDiv className="App">
        <BoxCard>
          <WrapperCard>
            <CoverCard />
            <TitleCard>Headline</TitleCard>
            <DescriptionCard>
              Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
              ornare in venen.
            </DescriptionCard>
            <Buttons>
              <Button color={myTheme.colors.primary} btnType={"primary"}>
                See More
              </Button>
              <Button btnType={"finite"}>Save</Button>
            </Buttons>
          </WrapperCard>
        </BoxCard>
      </StyledDiv>
    </ThemeProvider>
  );
}

export default App;
