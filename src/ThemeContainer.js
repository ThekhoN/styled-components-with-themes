import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    link: "#08f",
    separator: "#d9d9d9",
    text: "#808080",
    textLight: "#929292"
  },
  fonts: {
    main: [
      "source-code-pro",
      "Menlo",
      "Monaco",
      "Consolas",
      "Courier New",
      "monospace"
    ]
  },
  fontSizes: {
    small: "12px",
    medium: "14px",
    large: "20px"
  },
  mediaQueries: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
  }
};

const ThemeContainer = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeContainer;
