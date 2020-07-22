import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
      darkgrey: "#343434",
      white: "#F2F2F2",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
  }

  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;
  