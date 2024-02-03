import styled from "styled-components";
import { MyAnimation } from "./styles/animations/animations";

export const StyledBtn = styled.button`
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

export const SuperButton = styled(StyledBtn)`
  border-radius: 5px;
  background-color: #ffe869;
  color: #363636;

  &:hover {
      animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`;