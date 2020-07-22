import React from "react";
import { ThemeProvider } from "styled-components/macro";

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
  letterSpacing: "0.1em"

};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
