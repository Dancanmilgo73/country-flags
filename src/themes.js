import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "hsl(0, 0%, 98%)",
  fontColor: "#000",
};

export const darkTheme = {
  body: "RGB(23,23,22)",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
    }
   
`;
