import React from 'react';
import styled from "styled-components";

function HomePage() {
  return (
    <>
      <div>
        <Navbar />
        <Middle />
      </div>
    </>
  );
}

export default HomePage;

// funções <<

const StyledNav = styled.div`
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
    <StyledNav>
      <div className='barra'>
        API Rick & Morty!
      </div>
    </StyledNav>
  )
}

const StyledMiddle = styled.div`
  .middleRules {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: lightcoral;
    margin: auto;
    font-size: 25px;
    gap: 15px;
    width: 80%;
    height: 80vh;
  };

  .fotoPersonagem {
    background-color: orange;
    width: 200px;
    height: 200px;
  };

  .rules {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

`;

function Middle() {
  return (
    <StyledMiddle>
      <div className='middleRules'>
        <div className='rules'>
          <div className='fotoPersonagem'>
            {/* foto */}
          </div>
          <div className='dadosPersonagem'>
            Nome <div className='linhaPersonagem' id='nomePersonagem'></div>
            Espécie<div className='linhaPersonagem' id='especiePersonagem'></div>
            Status<div className='linhaPersonagem' id='statusPersonagem'></div>
            Local<div className='linhaPersonagem' id='localPersonagem'></div>
          </div>
        </div>
        <div>
          {/* blocos de personagens */}
        </div>
      </div>
    </StyledMiddle>
  )
}



// fim