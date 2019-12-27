This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Theme Provider with Media Query Breakpoints
`MyHeader.js`
```
import styled from "styled-components/macro";

const MyHeader = styled.h2`
  text-align: center;
  padding: 1rem 0;

  /* accessible via props */
  color: ${props => {
    return `${props.theme.colors.link}`;
  }};

  /* destructuring theme from props */
  font-family: ${({ theme }) => `${theme.fonts.main}`};

  /* media queries */
  ${({ theme }) =>
    `
        @media (min-width:${theme.mqBreakPoints.mobileS}) {  
            color: orange;
        }
        @media (min-width:${theme.mqBreakPoints.mobileM}) {  
            color: pink;
        }
        @media (min-width:${theme.mqBreakPoints.mobileL}) {  
            color: red;
        }
        @media (min-width:${theme.mqBreakPoints.mobileL}) {  
            color: red;
        }
        @media (min-width:${theme.mqBreakPoints.tablet}) {  
            color: purple;
        }
        @media (min-width:${theme.mqBreakPoints.laptop}) {  
            color: olive;
        }
    `}
`;

export default MyHeader;
```


`ThemeContainer.js`
```
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
  mqBreakPoints: {
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
```


`App.js`
```
import React from "react";
import MyHeader from "./components/MyHeader";
import ThemeContainer from "./ThemeContainer";

function App() {
  return (
    // Common Theme
    <ThemeContainer>
      <MyHeader>Styled Components FYI!</MyHeader>
    </ThemeContainer>
  );
}

export default App;
```
