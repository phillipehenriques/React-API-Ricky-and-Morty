import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import styled from "styled-components";
import { CSSReset } from "./CSSReset";
import { EstiloDaNavbar } from "./style/EstiloDaNavbar";

function HomePage() {
  const mensagem = "";
  const estilosDaHomePage = {backgroundColor: "blue", width: "100%"};

  return (
      <>
      <CSSReset />
      <div style={estilosDaHomePage}>
          <Navbar/>
          <Container />
          <Bottom />
      </div>
      </>
  );
}

 export default HomePage;

    // funções <<

  const StyledHeader = styled.div` // o que é isso e porque isso está aqui Csorgo? <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  .barra {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  width: 100%;
  height: 12vh;
  }
`;
  
function Navbar() {
  return (
      <EstiloDaNavbar>
        <div className="barra">
          Alguma coisa aqui!
        </div>
      </EstiloDaNavbar>
  )
}

function Container() {
  return (
      <Container>
      
      </Container>
  )
}

function Bottom() {
  return (
      <Bottom>
      
      </Bottom>
  )
}

// fim