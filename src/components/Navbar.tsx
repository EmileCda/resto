import { useState } from "react";
import {
  BurgerMenu,
  LeftContainer,
  Logo,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinkContainer,
  RightContainer,
} from "../styles/Navbar.style";
import jsonData from "./../data/label.json";
export const localData: any = jsonData;
import LogoImg from "../images/Logo-defaut.png";

export enum TLang {
  fr = "fr",
  en = "en",
  es = "es",
}

export type JsonLink = {
  en: TLang;
  es: TLang;
  fr: TLang;
  link: string;
};

export default function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const navbar = jsonData.navbar;
console.log(navbar);
  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
               <ul>
                 {navbar.map((item: JsonLink, index: number) => ( 
                   <li key={index}>
                    <NavbarLink to={item.link}>{item.fr}</NavbarLink>
                  </li>
                 ))}
            
              </ul> 
            </NavbarLinkContainer>
            <BurgerMenu onClick={() => setExtendNavbar((x) => !x)}>
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </BurgerMenu>
          </LeftContainer>
          <RightContainer>
            <Logo src={LogoImg}></Logo>
          </RightContainer>
        </NavbarInnerContainer>

        {extendNavbar && (
          <NavbarExtendedContainer>
             <ul>
                  {navbar.map((item: JsonLink, index: number) => (
                  <li key={index} onClick={() => setExtendNavbar((x) => !x)}>
                    <NavbarLink to={item.link}>{item.fr}</NavbarLink>
                  </li>
                ))}
               </ul> 
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </>
  );
}