import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

  const StyledHeader = styled.div` //o que é isso e porque isso está aqui Csorgo? <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  .userInfo {
      margin-top: 56px;
      margin-bottom: 20px;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
  }
`;
  
function Navbar() {
  return (
      <EstiloDaNavbar>

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