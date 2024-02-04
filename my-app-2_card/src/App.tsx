import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BtnSave } from './components/styles/Buttons/BtnSave.styled';


function App() {
  return (
    <div className='App'>
      <Box>
        <BtnSave/>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme.colors.theme};

  button {
    cursor: pointer;
  }
`