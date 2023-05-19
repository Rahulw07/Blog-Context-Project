import { createContext, useState } from "react";


//step 1
export const DarkModeContext = createContext();

export default function DarkThemeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = (dark) => {
        setDarkMode(!darkMode);
    };

    const value = {
        darkMode,
        setDarkMode,
        toggleDarkMode
    };
     
    //step 2
    return   <DarkModeContext.Provider value={value}>
    {children}
</DarkModeContext.Provider>;
}
 