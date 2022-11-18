import React from 'react';
import styled from "styled-components";

function HomePage() {
  return (
    <>
      <div>
        <Navbar />
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
        Alguma coisa aqui!
      </div>
    </StyledNav>
  )
}

// fim