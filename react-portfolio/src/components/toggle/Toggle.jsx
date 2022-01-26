import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { IconButton, Button } from '@mui/material';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import "./toggle.scss"


export default  function Toggle({ menuOpen, setMenuOpen }) {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
        console.log("Thmeme Changed");
    };
    
    
  return (
     
  <div className={"t " + (menuOpen && "active")} style={{ border: theme.state.darkMode && "2px solid white" }}>
                <IconButton className="t-icon-sun">
                    <LightModeIcon />
              </IconButton >
              <IconButton className="t-icon-moon">
                    <DarkModeIcon />
              </IconButton>
              <ButtonUnstyled color="error" className="t-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}/>
  </div>
  )
}


