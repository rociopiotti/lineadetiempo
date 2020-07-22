import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";

const theme = {
  colors: {
    darkgrey: "#343434",
    white: "#ffffff",
  },
  fonts: ["sans-serif", "Mulish"],
  fontSizes: {
    extrasmall: "0.8em",
    small: "1em",
    medium: "1.5em",
    large: "3em",
  },
  letterSpacing: "0.1em",
  sideMargin: "5vw",
};

export const Space = styled.span`
  flex-grow: 1;
`;

export const Container = styled.section`
  width: 100%;
  height: 15vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts[1]};
  color: ${(props) => props.theme.colors.darkgrey};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  border: solid orange thin;
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
