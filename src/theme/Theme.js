import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";

const theme = {
  colors: {
    darkgrey: "#343434",
    white: "#ffffff",
  },
  fonts: ["sans-serif", "Mulish"],
  fontSizes: {
    extraextrasmall: "0.5rem",
    extrasmall: "0.7rem",
    small: "1rem",
    medium: "1.5rem",
    large: "3rem",
  },
  letterSpacing: "0.1rem",
  sideMargin: "5vw",
  opacity: "0.8",

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
  align-items: flex-start;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts[1]};
  color: ${(props) => props.theme.colors.darkgrey};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  position: relative;
  top: 10vh;
`;

export const ContainerColumn = styled.section`
  width: 50%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  top: 0;
  margin: 0 1vw;
`;


const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
