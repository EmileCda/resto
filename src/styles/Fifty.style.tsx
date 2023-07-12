import { styled } from "styled-components";
import { DESKTOP, MOBILE, colorList } from "./App.style";



export const FiftyContainer = styled.div`
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

export const Content = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: ${colorList.forground};
  padding: 1rem;
 

`;


export const FiftyItemDiv = styled.div`
  max-width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${MOBILE}px) {   max-width: 40%;}
  img{
    /* width: 90%; */
    max-width: 400px;
    padding: 1rem;
  }

`;
