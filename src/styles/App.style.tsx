
import { createGlobalStyle, styled } from "styled-components";

export const MOBILE  = 700;
export const DESKTOP  = 1000;


export const colorsInit= {
  dark: "#03045e",
  lessDark: "#0077b6",
  medium: "#00b4d8",
  lessLight: "90e0ef",
  light: "#caf0f8",
  black: "#000000",
  white: "#FFFFFF",
};


export const colorsDark = {
  
  background: colorsInit.dark ,
  lessBG: colorsInit.lessDark ,
  medium:colorsInit.medium ,
  lessFG: colorsInit.lessLight ,
  forground: colorsInit.light ,
  black: colorsInit.white ,
  white: colorsInit.black ,
}

export const colorsLight = {
  
  background:colorsInit.light , 
  lessBG: colorsInit.lessLight ,
  medium:colorsInit.medium ,
  lessFG: colorsInit.lessDark ,
  forground: colorsInit.dark ,
  black: colorsInit.black ,
  white: colorsInit.white ,
}

export function setColor(darkMode : boolean){

if (darkMode)  return colorsDark ;
return colorsLight ; 
}
export const colorList = setColor (true);

export const fontList = {
  regular: "Gloria Hallelujah, cursive",
  extra: "Poppins, sans-serif",
  Logo: "Lobster, cursive",
}

export const AppGlobalStyle = createGlobalStyle`
  :root {
    background-color:${colorList.background};
    text-decoration: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    font-size: 24px;

    @media (min-width: ${MOBILE}px) { font-size:  18px; }

    @media (min-width: ${DESKTOP}px1024px) {font-size:  16px; }
  body {
    margin: 0;
    padding: 0;
    
  }
}

`;

export const PageContainer = styled.div`
  background-color: ${colorList.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.6rem;
  padding: 0.6rem;
  color: ${colorList.forground};
  padding: 0.2rem;
  height: 75vh;
  width: 97%;
  position: absolute;
  top: 80px; left: 0; bottom: 480px;
  img{
    width: 200px;
    height: 100px;
  }
  border: solid 1px red;
  overflow-y: scroll;
  
`;



