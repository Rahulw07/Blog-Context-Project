import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext"
import DarkThemeProvider from "./context/DarkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkThemeProvider>
    <AppContextProvider>
    <App />
  </AppContextProvider>
  </DarkThemeProvider>
   
    
  
);
