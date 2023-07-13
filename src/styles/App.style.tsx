
import { createGlobalStyle, styled } from "styled-components";
import { jsonLabel } from "../lib/utils";
import jsonData from "../data/label.json";
export const MOBILE  = 700;
export const DESKTOP  = 1000;

export const colorsInit= {
  dark: jsonLabel(jsonData.colors, 'dark')?.fr,
  lessDark: jsonLabel(jsonData.colors, 'lessDark')?.fr,
  medium: jsonLabel(jsonData.colors, 'medium')?.fr,
  lessLight: jsonLabel(jsonData.colors, 'lessLight')?.fr,
  light: jsonLabel(jsonData.colors, 'light')?.fr,
  black:jsonLabel(jsonData.colors, 'black')?.fr,
  white: jsonLabel(jsonData.colors, 'white')?.fr,
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
    margin: 0 0 0 10rem;
    padding:0 0 0 10rem;
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
    box-sizing: border-box;
    margin: 0 0 0 10rem;
    padding:0 0 0 10rem;
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
  padding: 0;
  height: 80%;
  width: 100%;
  position: absolute;
  top: 80px; left: 0; 
  /* img{
    width: 200px;
    height: 100px;
  } */
  border: solid 1px red;
  overflow-y: scroll;
  
`;


export const SectionContainer = styled.div`
  min-height: 5rem;
  min-width: 100vw;
  background-color: ${colorList.background};
  display:flex;
  align-content : center;
  flex-direction: column;
  align-items: center;
 
`;

export const Title = styled.div`

  color: ${colorList.forground};
  font-size: 1.5rem;

`;


export const ContentBox = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;


interface BoxItemProps {
  boxSize : string
}

export const BoxItem = styled.div< BoxItemProps>`
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  @media (min-width: ${MOBILE}px) {   width:${props=>props.boxSize}% ;}
  img{
    max-width: 400px;
    width: 100%;
    padding: 1rem;
  }

`;

