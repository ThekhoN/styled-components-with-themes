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
