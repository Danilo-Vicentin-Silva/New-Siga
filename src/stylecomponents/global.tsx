import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  body {
    background-color: #F5F5F5;
    font-family: "Arvo", serif;
    font-weight: 400;
    font-style: normal;
    }
`;

export const theme = {
  colors: {
    color1: "#ABAABF",
    color2: "#244BBF",
    color3: "#1F41A6",
    color4: "#172E73",
    color5: "#AEB2BF",
  },
};
