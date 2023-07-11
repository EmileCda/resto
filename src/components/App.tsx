import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppGlobalStyle } from "../styles/App.style";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />

        <Header />
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
