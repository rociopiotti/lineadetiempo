import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";

const theme = {
  colors: {
    darkgrey: "#343434",
    white: "#ffffff",
  },
  fonts: ["sans-serif", "Mulish"],
  fontSizes: {
    extrasmall: "0.8rem",
    small: "1rem",
    medium: "1.5rem",
    large: "3rem",
  },
  letterSpacing: "0.1rem",
  sideMargin: "5vw",

  // -------------------> TESTING PROPERTIES <------------------- //
  testingColor: "lightgreen",
};

export const Space = styled.span`
  flex-grow: 1;
`;

export const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex;
  background-color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts[1]};
  color: ${(props) => props.theme.colors.darkgrey};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  border: solid orange thin;
  position: relative;
  top: 15vh;
`;

export const ContainerColumn = styled.section`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: thin solid ${(props) => props.theme.testingColor};
  
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
