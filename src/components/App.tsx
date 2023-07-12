import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppGlobalStyle } from "../styles/App.style";

import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Navbar from "./Navbar";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />
        <Navbar  />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </StrictMode>
  );
}
