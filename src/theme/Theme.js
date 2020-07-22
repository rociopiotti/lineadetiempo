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

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
