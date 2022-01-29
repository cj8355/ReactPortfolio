import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu"
import Skills from "./components/skills/Skills"
import PaginationSize from "./components/scrollDots/ScrollDots";
import Toggle from "./components/toggle/Toggle";
import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';


import { useContext, useState } from "react";
import { ThemeContext } from "./context";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <StyledEngineProvider injectFirst>
    
    <div className="app" style={{ backgroundColor: darkMode && "#333", color: darkMode && "white",  }}>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Toggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

  
      
      <div className="sections">
        <Intro />
        
        <Portfolio />
        <Works />
        <Skills />
        <Testimonials />
        <Contact />
        
      </div>
     
    
    </div>
    </StyledEngineProvider>
  );

}

export default App;
