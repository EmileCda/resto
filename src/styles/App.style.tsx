
import { createGlobalStyle } from "styled-components";

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
export const AppGlobalStyle = createGlobalStyle`
  :root {
    background-color: "#123456";
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

`;

