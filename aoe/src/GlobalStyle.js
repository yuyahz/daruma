import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .contentWrapper {
    padding-top: 100px; 
  }

  @media screen and (max-width: 575px) {
    .contentWrapper {
      padding-top: 80px; 
    }
  }
`;

export default GlobalStyle;
