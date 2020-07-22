import React from "react";
import Routes from "./router/Routes";
import Theme from "./theme/Theme";
import styled from "styled-components/macro";

const Container = styled.div`
  width: 100%;
  heigth: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts[0]};
  color: ${(props) => props.theme.colors.darkgrey[0]};
  border: solid red thin;

  @media (min-width: 1440px) {
    width: 60%;
    margin: 0 auto;
  }
`;

function App() {
  return (
    <Theme>
      <Container>
        <Routes />
      </Container>
    </Theme>
  );
}

export default App;
