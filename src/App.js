import React, { useState } from "react";

/* Handle console logs */
// import "utils/dropConsole";

/* Styles */
import "fontsource-roboto";
// import logo from "./assets/images/logo.svg";
// import { SharedComp, ComplexShared } from "./components";

/* Router */
import { Router } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";

/* MUI Theme */
import { ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { dark, light } from "./styles/Theme";
import "./App.css";

  
function App() {
  const [darkState, setDarkState] = useState(true);
  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log("theme=", darkState ? "dark" : "light");
  };


  return (
    <React.Fragment>
        <ThemeProvider theme={darkState ? dark() : light()}>
          <ThemeSwitch
            darkState={darkState}
            handleThemeChange={handleThemeChange}
          />
          <Router>
            <RouterConfig/>
          </Router>
        </ThemeProvider>
    </React.Fragment>
    
  );
}
  
export default App;