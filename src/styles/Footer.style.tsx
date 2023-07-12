import { styled } from "styled-components";
import { colorList } from "./App.style";

export const FooterContainer = styled.footer`
  width: 100vw;
  background-color:${colorList.medium};
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0; left: 0;
  @media (min-width: 1000px) {
    height: 80px;
  }
`;
