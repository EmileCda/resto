import { Link } from "react-router-dom";
import styled from "styled-components";
import { MOBILE, colorList, fontList } from "./App.style";

export const NavbarLink = styled(Link)`
  color: ${colorList.forground};
  font-family: ${fontList.extra};
  text-decoration: none;
  margin: 10px;
 
`;
export const NavbarContainer = styled.nav<{extendNavbar:boolean}>`
  width: 100vw;
  height: ${(props) => (props.extendNavbar ? "100vh" : "10vh")};
  background-color:${colorList.lessBG};
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0; left: 0;
  @media (min-width: ${MOBILE}) {
    height: 10vh;
  }
`;


export const NavbarInnerContainer = styled.div`
  height: 80px;
  display: flex;
`;

export const BurgerMenu = styled.button`
  background: none;
  border: none;
  color:${colorList.medium};
  font-size: 3rem;
  cursor: pointer;
  @media (min-width: ${MOBILE}px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: none;
  ul{
    display: flex;
    list-style-type: none;
  }
  @media (min-width: ${MOBILE}px) {
    display: flex;
  }

`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  align-items: center;
`;


export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  width: 80px;
  height: 80px;
`;

export const NavbarExtendedContainer = styled.div`
  background-color: ${colorList.lessBG};
  opacity: 0.8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  z-index: 1;
  ul{
    list-style-type: none;
  }

  @media (min-width: ${MOBILE}px) {
    display: none;
  }
`;