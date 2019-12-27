import React from "react";
import styled from "styled-components";

const Test = () => {
  return (
    <div>
      <MyHeader>Test Header</MyHeader>
    </div>
  );
};

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
        @media (min-width:${theme.mediaQueries.mobileS}) {  
            color: orange;
        }
        @media (min-width:${theme.mediaQueries.mobileM}) {  
            color: pink;
        }
        @media (min-width:${theme.mediaQueries.mobileL}) {  
            color: red;
        }
        @media (min-width:${theme.mediaQueries.mobileL}) {  
            color: red;
        }
        @media (min-width:${theme.mediaQueries.tablet}) {  
            color: purple;
        }
        @media (min-width:${theme.mediaQueries.laptop}) {  
            color: olive;
        }
    `}
`;

export default Test;
